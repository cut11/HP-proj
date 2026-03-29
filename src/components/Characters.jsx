import React from 'react';
import { motion } from 'framer-motion';

const Characters = () => {
  const characters = [
    {
      id: "harry",
      name: "Harry Potter",
      house: "Gryffindor",
      role: "The Boy Who Lived",
      description: "Known for his bravery and unwavering loyalty. He defeated Lord Voldemort to save the wizarding world.",
      image: "/characters/harry.jpg",
      glowColor: "hover:shadow-[0_0_30px_rgba(116,0,1,0.6)]" // Gryffindor red
    },
    {
      id: "hermione",
      name: "Hermione Granger",
      house: "Gryffindor",
      role: "Brightest Witch of Her Age",
      description: "A brilliant student whose intellect, logic, and magical knowledge repeatedly saved her friends.",
      image: "/characters/hermione.avif",
      glowColor: "hover:shadow-[0_0_30px_rgba(116,0,1,0.6)]"
    },
    {
      id: "draco",
      name: "Draco Malfoy",
      house: "Slytherin",
      role: "Slytherin Student",
      description: "Harry's school rival, arrogant and prejudiced, but ultimately struggled with the dark path set before him.",
      image: "/characters/draco.avif",
      glowColor: "hover:shadow-[0_0_30px_rgba(26,71,42,0.6)]" // Slytherin green
    },
    {
      id: "dumbledore",
      name: "Albus Dumbledore",
      house: "Gryffindor (Alumni)",
      role: "Headmaster of Hogwarts",
      description: "Considered the greatest wizard of modern times, known for his wisdom, power, and gentle eccentricity.",
      image: "/characters/dumbledore.avif",
      glowColor: "hover:shadow-[0_0_30px_rgba(211,166,37,0.6)]" // Gold
    },
    {
      id: "snape",
      name: "Severus Snape",
      house: "Slytherin",
      role: "Potions Master",
      description: "A complex and highly skilled wizard whose true loyalties remained hidden until the very end.",
      image: "/characters/snape.jpg",
      glowColor: "hover:shadow-[0_0_30px_rgba(26,71,42,0.6)]"
    },
    {
      id: "mcgonagall",
      name: "Minerva McGonagall",
      house: "Gryffindor",
      role: "Transfiguration Professor",
      description: "A strict but fair educator, an exceptionally powerful witch, and a fiercely loyal defender of Hogwarts.",
      image: "/characters/mcgonagall.jpg",
      glowColor: "hover:shadow-[0_0_30px_rgba(116,0,1,0.6)]"
    },
    {
      id: "ron",
      name: "Ron Weasley",
      house: "Gryffindor",
      role: "Harry's Best Friend",
      description: "Fiercely loyal, brave, and sometimes humorous. He faced his deepest fears to help save the world.",
      image: "/characters/ron.jpg",
      glowColor: "hover:shadow-[0_0_30px_rgba(116,0,1,0.6)]"
    },
    {
      id: "ginny",
      name: "Ginny Weasley",
      house: "Gryffindor",
      role: "Chaser & D.A. Member",
      description: "A talented and powerful witch. She fought bravely in the Battle of Hogwarts and proved her incredible strength.",
      image: "/characters/ginny.avif",
      glowColor: "hover:shadow-[0_0_30px_rgba(116,0,1,0.6)]"
    },
    {
      id: "fred_george",
      name: "Fred & George",
      house: "Gryffindor",
      role: "Mischief Makers",
      description: "Brilliant pranksters and identical twins who brought light and laughter to the darkest of times.",
      image: "/characters/fred_george.avif",
      glowColor: "hover:shadow-[0_0_30px_rgba(116,0,1,0.6)]"
    },
    {
      id: "voldemort",
      name: "Lord Voldemort",
      house: "Slytherin",
      role: "The Dark Lord",
      description: "Considered the most powerful Dark Wizard of all time. He sought immortality and absolute power over the wizarding world.",
      image: "/characters/voldemort.webp",
      glowColor: "hover:shadow-[0_0_40px_rgba(26,71,42,0.9)]"
    },
    {
      id: "grindelwald",
      name: "Gellert Grindelwald",
      house: "Durmstrang Institute",
      role: "Dark Wizard",
      description: "A tremendously powerful and dangerous Dark Wizard who sought to lead a new Wizarding World order based on his strong belief in wizarding superiority.",
      image: "/characters/grindelwald.jpg",
      glowColor: "hover:shadow-[0_0_40px_rgba(100,100,150,0.6)]"
    },
    {
      id: "sirius",
      name: "Sirius Black",
      house: "Gryffindor",
      role: "Padfoot & Marauder",
      description: "Harry Potter's godfather, fiercely loyal and rebellious. He spent twelve years in Azkaban for a crime he didn't commit.",
      image: "/characters/sirius.jpg",
      glowColor: "hover:shadow-[0_0_30px_rgba(116,0,1,0.6)]"
    }
  ];

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
        {characters.map((char, index) => (
          <motion.div
            key={char.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`group bg-gray-900/60 rounded-xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 ${char.glowColor} relative`}
          >
            {/* Image Container */}
            <div className="w-full h-80 overflow-hidden relative">
              <img
                src={char.image}
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
        ))}
      </div>
    </div>
  );
};

export default Characters;
