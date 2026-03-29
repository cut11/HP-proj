import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const images = [
    { src: "/gallery/harry_preview.jpg", title: "The Boy Who Lived", size: "col-span-1 row-span-2" },
    { src: "/gallery/unsplash_hogwarts.jpg", title: "Hogwarts Castle", size: "col-span-2 row-span-2" },
    { src: "/gallery/hp1_scene.webp", title: "The Journey Begins", size: "col-span-1 row-span-1" },
    { src: "/gallery/deathly_hallows_poster.png", title: "The Deathly Hallows", size: "col-span-1 row-span-2" },
    { src: "/gallery/hp1_scene2.webp", title: "Sorcerer's Stone", size: "col-span-1 row-span-1" },
    { src: "/gallery/wizarding_world_logo.png", title: "Wizarding World", size: "col-span-2 row-span-1" },
    { src: "/gallery/spells_infographic.jpg", title: "Magical Spells", size: "col-span-1 row-span-2" },
    { src: "/gallery/butterbeer.jpg", title: "Butterbeer", size: "col-span-1 row-span-1" },
    { src: "/gallery/phoenix_banner.jpg", title: "Order of the Phoenix", size: "col-span-2 row-span-1" },
    { src: "/gallery/hp_quotes.jpg", title: "Magical Quotes", size: "col-span-1 row-span-1" },
    { src: "/gallery/hedwig_fanart.jpg", title: "Hedwig Art", size: "col-span-1 row-span-1" },
    { src: "/gallery/hp1_scene3.webp", title: "First Year Magic", size: "col-span-2 row-span-1" },
    { src: "/gallery/new_gallery1.jpg", title: "Magical Moment", size: "col-span-1 row-span-1" },
    { src: "/gallery/new_gallery2.jpg", title: "Wizarding Wonder", size: "col-span-1 row-span-2" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // Close modal with escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="w-full min-h-screen pt-24 pb-20 px-4 relative z-10 bg-hp-darker">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-wizard font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-hp-gold-light via-hp-gold to-hp-gold-dark drop-shadow-lg">
          Magical Archives
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-transparent via-hp-gold to-transparent mx-auto mb-6" />
        <p className="text-xl text-gray-300 font-body max-w-2xl mx-auto">
          Uncover the captured moments from the wizarding world.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4 grid-flow-dense">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94], // Smooth ease out
            }}
            viewport={{ once: true, amount: 0.1 }}
            onClick={() => setSelectedImage(img)}
            className={`relative group overflow-hidden rounded-xl border border-white/10 hover:border-hp-gold/50 transition-colors duration-500 cursor-pointer shadow-2xl ${img.size}`}
          >
            {/* Background Image Setup */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${img.src})` }}
            />

            {/* Dark overlay for vignette/gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-hp-gold/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Glowing inner border element */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-hp-gold-light/30 transition-colors duration-500 z-10 pointer-events-none" />

            {/* Text and Info Overlay */}
            <div className="absolute bottom-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 w-full">
              <h3 className="text-2xl font-wizard text-hp-gold-light drop-shadow-lg mb-2">
                {img.title}
              </h3>
              <div className="w-8 h-[2px] bg-hp-gold rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100" />
            </div>

            {/* Sparkle subtle effect over image on hover */}
            <motion.div
              className="absolute top-4 right-4 text-hp-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal for Uncropped Clear Image View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-100 flex justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm cursor-zoom-out overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-6 right-6 text-white hover:text-hp-gold-light transition-colors z-50 bg-black/50 rounded-full p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full h-fit my-auto flex flex-col items-center pointer-events-none py-10"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking the image wrapper itself
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] h-auto w-auto object-contain rounded-lg shadow-2xl border border-white/10 pointer-events-auto cursor-default block"
              />
              <div className="mt-6 text-center">
                <h3 className="text-4xl font-wizard text-hp-gold-light drop-shadow-xl">{selectedImage.title}</h3>
                <div className="w-20 h-1 bg-hp-gold mx-auto mt-4 rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
