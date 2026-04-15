import React, { useState, useRef, useEffect } from 'react';

const MusicPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt automatic playback programmatically
    const tryPlayAudio = async () => {
      try {
        if (videoRef.current && videoRef.current.paused) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.warn("Autoplay was prevented by the browser. Interaction needed.");
      }
    };

    tryPlayAudio();

    // Fallback: start playing instantly on the FIRST user interaction if it was blocked
    const handleInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
        
        window.removeEventListener('click', handleInteraction);
        window.removeEventListener('keydown', handleInteraction);
        window.removeEventListener('touchstart', handleInteraction);
      }
    };

    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('keydown', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  const togglePlayPause = (e) => {
    e.stopPropagation(); // Avoid triggering the body click listener
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.error(err));
      }
    }
  };

  return (
    <>
      {/* Visually hidden video element used solely for audio playback */}
      <video
        ref={videoRef}
        src="/ssstik.io_@jcweditsae_1775080527258.mp4"
        loop
        autoPlay
        playsInline
        className="hidden"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <button 
        className="fixed bottom-8 right-8 bg-slate-900/60 backdrop-blur-md border border-white/10 text-white py-3.5 px-7 rounded-full cursor-pointer text-base font-medium transition-all duration-300 z-[100] flex items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-slate-800/80 hover:border-white/20 hover:-translate-y-0.5"
        onClick={togglePlayPause}
      >
        {isPlaying ? (
          <>
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
            Pause
          </>
        ) : (
          <>
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Play
          </>
        )}
      </button>
    </>
  );
};

export default MusicPlay;
