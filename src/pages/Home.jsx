import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const houses = [
    {
      id: "gryffindor",
      name: "Gryffindor",
      traits: "Courage, Bravery, Nerve, Chivalry",
      bgImage: "/houses/gryffindor.jpg",
      textColor: "text-hp-gold-light",
    },
    {
      id: "slytherin",
      name: "Slytherin",
      traits: "Ambition, Cunning, Leadership, Resourcefulness",
      bgImage: "/houses/slytherin.jpg",
      textColor: "text-gray-200",
    },
    {
      id: "ravenclaw",
      name: "Ravenclaw",
      traits: "Intelligence, Knowledge, Curiosity, Creativity",
      bgImage: "/houses/ravenclaw.jpg",
      textColor: "text-hp-gold", 
    },
    {
      id: "hufflepuff",
      name: "Hufflepuff",
      traits: "Hard work, Patience, Justice, Loyalty",
      bgImage: "/houses/hufflepuff.jpg",
      textColor: "text-hp-gold-light", 
    },
  ];

  return (
    <div id="houses" className="w-full min-h-screen pt-24 px-4 pb-12 relative z-10 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mb-16"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-wizard font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-hp-gold-light via-hp-gold to-hp-gold-dark drop-shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.3 } }
          }}
        >
          {Array.from("The Four Houses").map((letter, i) => (
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
        <p className="text-xl text-gray-300 font-body max-w-2xl mx-auto">
          Discover the unique traits and bold colors of each house.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
        {houses.map((house, index) => (
          <motion.div
            key={house.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 border border-white/10 relative overflow-hidden group min-h-[300px]`}
          >
            {/* Background Image with Zoom Animation */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${house.bgImage})` }}
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />

            {/* Glowing inner border effect */}
            <div className="absolute inset-0 rounded-xl border border-white/5 group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />

            <h2 className={`text-4xl font-wizard font-bold mb-4 ${house.textColor} drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-10`}>
              {house.name}
            </h2>

            <div className={`w-16 h-1 bg-current opacity-70 my-4 rounded-full z-10 ${house.textColor}`} />

            <p className={`text-lg font-body text-gray-200 drop-shadow-md z-10 font-medium`}>
              {house.traits}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
