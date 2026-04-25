import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Wizards", href: "#wizards" },
    { name: "Houses", href: "#houses" },
    { name: "Creatures", href: "#creatures" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
        ? "bg-hp-darker/90 backdrop-blur-md border-hp-gold/20 shadow-[0_4px_30px_rgba(211,166,37,0.1)] py-3"
        : "bg-transparent border-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo area */}
          <a
            href="#home"
            className="shrink-0 flex items-center cursor-pointer group"
          >
            <div className="font-wizard text-2xl font-bold text-hp-gold tracking-widest relative group-hover:text-hp-gold-light transition-colors duration-300">
              Hogwarts
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-hp-gold-light transition-all duration-300 group-hover:w-full"></span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-wizard text-sm tracking-widest text-gray-300 hover:text-hp-gold transition-colors duration-300 uppercase relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-hp-gold rounded-full opacity-0 transform -translate-x-1/2 transition-all duration-300 group-hover:opacity-100 group-hover:-bottom-1" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-hp-gold hover:text-hp-gold-light focus:outline-none transition-colors"
            >
              {isOpen ? (
                // 'X' close icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-hp-darker/95 backdrop-blur-xl border-b border-hp-gold/20 shadow-2xl transition-all duration-300 ease-in-out transform origin-top ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex text-center justify-center font-wizard text-lg tracking-widest text-gray-300 hover:text-hp-gold transition-colors duration-300 uppercase py-2 border-b border-white/5 last:border-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
