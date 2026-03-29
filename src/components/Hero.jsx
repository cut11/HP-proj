import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-wizard font-bold text-transparent bg-clip-text bg-linear-to-b from-hp-gold-light via-hp-gold to-hp-gold-dark drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-6 tracking-widest leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.5 } }
          }}
        >
          {Array.from("Welcome to Hogwarts").map((letter, i) => (
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
        </motion.h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-200 font-body max-w-2xl mx-auto drop-shadow-md">
          Discover the magic within the walls of the greatest school of witchcraft and wizardry
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
