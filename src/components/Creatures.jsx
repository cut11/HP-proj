import React from "react";
import { motion } from "framer-motion";

const Creatures = () => {
  const creatures = [
    {
      id: "basilisk",
      name: "The Basilisk",
      type: "Serpent of Slytherin",
      description: "A giant serpent, also known as the King of Serpents. Its gaze is lethal, and its venom is deeply poisonous.",
      image: "/creatures/basilisk.webp",
      glowColor: "hover:shadow-[0_0_30px_rgba(26,71,42,0.6)]" // Slytherin green
    },
    {
      id: "dobby",
      name: "Dobby",
      type: "House-Elf",
      description: "A free elf who was famously loyal to Harry Potter. He was brave, kind-hearted, and would do anything to protect his friends.",
      image: "/creatures/dobby.jpg",
      glowColor: "hover:shadow-[0_0_30px_rgba(211,166,37,0.6)]" // Gold
    },
    {
      id: "fluffy",
      name: "Fluffy",
      type: "Three-Headed Dog",
      description: "A massive and fiercely loyal three-headed dog belonging to Hagrid, once used to guard the Sorcerer's Stone.",
      image: "/creatures/fluffy.jpg",
      glowColor: "hover:shadow-[0_0_30px_rgba(116,0,1,0.6)]" // Gryffindor red
    },
    {
      id: "buckbeak",
      name: "Buckbeak",
      type: "Hippogriff",
      description: "A proud and majestic half-horse, half-eagle creature. Extremely loyal to those who show him proper respect.",
      image: "/creatures/buckbeak.webp",
      glowColor: "hover:shadow-[0_0_30px_rgba(200,200,220,0.6)]" // Gray/Silver
    },
    {
      id: "dementor",
      name: "Dementor",
      type: "Dark Creature",
      description: "A foul, soul-sucking fiend that feeds on human happiness and forces its victims to relive their worst memories.",
      image: "/creatures/dementor.webp",
      glowColor: "hover:shadow-[0_0_40px_rgba(50,50,50,0.8)]" // Dark shadow
    },
    {
      id: "hedwig",
      name: "Hedwig",
      type: "Snowy Owl",
      description: "Harry Potter's loyal and highly intelligent snowy owl. She was a constant companion and friend throughout his early years.",
      image: "/creatures/hedwig.png",
      glowColor: "hover:shadow-[0_0_30px_rgba(255,255,255,0.7)]" // White glow
    },
    {
      id: "dragon",
      name: "Ukrainian Ironbelly",
      type: "Dragon",
      description: "The largest species of dragon in the wizarding world. One famously guarded the Lestrange vault deep within Gringotts.",
      image: "/creatures/dragon.jpg",
      glowColor: "hover:shadow-[0_0_40px_rgba(255,100,0,0.6)]",
      imagePosition: "object-right"
    },
    {
      id: "troll",
      name: "Mountain Troll",
      type: "Troll",
      description: "A gigantic and incredibly strong magical beast but famously dim-witted. One famously broke into Hogwarts on Halloween.",
      image: "/creatures/troll.webp",
      glowColor: "hover:shadow-[0_0_30px_rgba(100,100,50,0.6)]" // Earthy glow
    },
    {
      id: "mysterious_beast_1",
      name: "Merperson (Selkie)",
      type: "Aquatic Being",
      description: "Intelligent aquatic beings that live in the Black Lake near Hogwarts. They have their own language (Mermish) which sounds like a terrible screeching above water, but is clearly understood underneath it.",
      image: "/creatures/creature1.avif",
      glowColor: "hover:shadow-[0_0_30px_rgba(50,150,200,0.6)]" // Blue/Water glow
    },
    {
      id: "mysterious_beast_2",
      name: "Acromantula (Aragog)",
      type: "Giant Spider",
      description: "A massive, eight-eyed magical spider originally from the jungles of Borneo. It is capable of human speech and prefers to live in dark forests. It is considered highly dangerous.",
      image: "/creatures/creature2.jpg",
      glowColor: "hover:shadow-[0_0_30px_rgba(100,100,100,0.6)]" // Dark grey glow
    },
    {
      id: "mysterious_beast_3",
      name: "Hungarian Horntail",
      type: "Dragon",
      description: "Considered one of the most vicious and aggressive dragon breeds in the wizarding world. It features black scales, yellow eyes, and possesses bronze spikes on its tail that it uses as a deadly weapon.",
      image: "/creatures/creature3.jpg",
      glowColor: "hover:shadow-[0_0_30px_rgba(200,100,50,0.6)]" // Fire/Orange glow
    },
    {
      id: "mysterious_beast_4",
      name: "Phoenix (Fawkes)",
      type: "Magical Bird",
      description: "A noble magical bird that bursts into flames when it grows old, only to be reborn from its ashes. Its tears have immense healing properties capable of curing even the deadliest poisons.",
      image: "/creatures/creature4.webp",
      glowColor: "hover:shadow-[0_0_30px_rgba(255,50,50,0.6)]" // Fiery Red glow
    }
  ];

  return (
    <div id="creatures" className="w-full min-h-screen py-24 px-4 relative z-10 flex flex-col items-center border-t border-hp-gold/10">
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
          {Array.from("Magical Creatures").map((letter, i) => (
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
          Fascinating beasts and beings that bring both wonder and danger to the wizarding world.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
        {creatures.map((creature, index) => (
          <motion.div
            key={creature.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`group bg-gray-900/60 rounded-xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 ${creature.glowColor} relative`}
          >
            {/* Image Container */}
            <div className="w-full h-72 overflow-hidden relative">
              <img
                src={creature.image}
                alt={creature.name}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${creature.imagePosition || 'object-center'}`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h3 className="text-2xl font-wizard text-hp-gold-light drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  {creature.name}
                </h3>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 h-48 border-t border-white/10 relative">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-hp-gold text-xs uppercase font-bold mb-3 tracking-wider drop-shadow-sm">{creature.type}</p>
              <p className="text-gray-300 font-body leading-relaxed text-sm">
                {creature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Creatures;
