import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("http://localhost:3000/api/characters", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result && result.success && result.data) {
          setCharacters(result.data);
        }
      })
      .catch((error) => console.error("Error fetching characters:", error));
  }, []);

  return (
    <div id="wizards" className="w-full min-h-screen py-24 px-4 relative z-10 flex flex-col items-center border-t border-hp-gold/10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mb-16"
      >
        <motion.h2
          className="text-5xl md:text-7xl font-wizard font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-hp-gold-light via-hp-gold to-hp-gold-dark drop-shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.3 } }
          }}
        >
          {Array.from("Legendary Wizards").map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h2>
        <p className="text-xl text-gray-300 font-body max-w-2xl mx-auto">
          The brilliant, the brave, and the cunning individuals who shaped wizarding history.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mx-auto">
        {characters.map((char, index) => {
          // Extract the shadow value from the Tailwind arbitrary class string
          const shadowMatch = char.glowColor?.match(/\[(.*?)\]/);
          const shadowValue = shadowMatch ? shadowMatch[1].replace(/_/g, ' ') : 'none';

          return (
          <motion.div
            key={char.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ '--card-shadow': shadowValue !== 'none' ? shadowValue : undefined }}
            className="group bg-gray-900/60 rounded-xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:[box-shadow:var(--card-shadow)] relative"
          >
            {/* Image Container */}
            <div className="w-full h-80 overflow-hidden relative bg-black/20">
              <img
                src={char.image ? `/characters/${char.image.split('/').pop()}` : ""}
                alt={char.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Subtle gradient overlay at the bottom of the image for text clarity */}
              <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h3 className="text-3xl font-wizard text-hp-gold-light drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  {char.name}
                </h3>
                <p className="text-sm font-body text-gray-300 uppercase tracking-widest mt-1 font-semibold drop-shadow-md">
                  {char.house}
                </p>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 h-40 border-t border-white/10 relative">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-hp-gold text-sm font-semibold mb-3 tracking-wider drop-shadow-sm">{char.role}</p>
              <p className="text-gray-300 font-body leading-relaxed text-base">
                {char.description}
              </p>
            </div>
          </motion.div>
        )})}
      </div>
    </div>
  );
};

export default Characters;
