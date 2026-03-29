import React, { useEffect, useState } from 'react';

const MagicCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Create a new particle on movement
      const newParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 6 + 2,
        color: ['#D3A625', '#F5D061', '#FFFFFF'][Math.floor(Math.random() * 3)],
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2 + 1, // slight downward drift
      };

      setParticles((prev) => {
        const newParticles = [...prev, newParticle];
        if (newParticles.length > 30) return newParticles.slice(newParticles.length - 30);
        return newParticles;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop for particles dropping/fading
  useEffect(() => {
    let animationFrameId;
    let lastTime = Date.now();

    const animateParticles = () => {
      if (particles.length > 0) {
        setParticles((prevParticles) => 
          prevParticles
            .map(p => ({
              ...p,
              x: p.x + p.vx,
              y: p.y + p.vy,
              size: p.size * 0.92, // shrink
            }))
            .filter(p => p.size > 0.5) // remove when too small
        );
      }
      animationFrameId = requestAnimationFrame(animateParticles);
    };

    animationFrameId = requestAnimationFrame(animateParticles);

    return () => cancelAnimationFrame(animationFrameId);
  }, [particles.length]); // depend on length to start/stop, internal logic handles the rest

  return (
    <>
      <style>
        {`
          body, a, button, input {
            cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><text y='24' font-size='24'>🪄</text></svg>") 0 0, auto !important;
          }
        `}
      </style>
      <div className="pointer-events-none fixed inset-0 z-100 overflow-hidden">
        {/* Particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="fixed top-0 left-0 rounded-full"
            style={{
              transform: `translate(${p.x - p.size / 2}px, ${p.y - p.size / 2}px)`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
              opacity: p.size / 6, // fade out as they shrink
            }}
          />
        ))}
      </div>
    </>
  );
};

export default MagicCursor;
