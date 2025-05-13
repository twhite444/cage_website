import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events for navbar appearance and scrollspy
  useEffect(() => {
    const handleScroll = () => {
      // Make navbar sticky after scrolling down
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Enhanced scrollspy for section highlighting
      const sections = ['home', 'menu', 'events', 'visit', 'contact'];
      
      // Find the section closest to the top of the viewport
      const current = sections.reduce((selected, sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return selected;
        
        const rect = element.getBoundingClientRect();
        const offset = 150; // Adjust based on your layout
        
        // Select section if it's in view with threshold adjustment
        if (rect.top <= offset && rect.bottom >= offset) {
          return sectionId;
        }
        return selected;
      }, activeSection);
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navLinks = [
    { name: 'Menu', href: '/menu', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
    { name: 'Events', href: '/events', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  ];
  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-(--color-darkPlum)/95 backdrop-blur-sm shadow-md py-2 border-b border-(--color-goldTan/20)' 
          : 'bg-transparent py-4'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with slogan */}
          <a 
            href="/" 
            className="flex items-center group"
            aria-label="The Cage - Back to Home"
          >
            <img 
              src="/header_logo_dark_wo_slogan_transparent.png" 
              alt="The Cage - Good Grog, good times" 
              className={`h-14 transition-transform group-hover:scale-105 ${
                isScrolled ? 'py-1' : 'py-0'
              }`}
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" role="navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-md transition-all duration-300 font-medium ${
                  activeSection === link.href.substring(1)
                    ? isScrolled 
                      ? 'text-(--color-goldTan) bg-(--color-warmGray/10)' 
                      : 'text-(--color-goldTan) bg-(--color-ivory/10)' 
                    : isScrolled 
                      ? 'text-(--color-garnet) hover:text-(--color-goldTan)' 
                      : 'text-(--color-ivory) hover:text-(--color-goldTan) hover:bg-(--color-ivory/10)'
                }`}
                onClick={() => {
                  setActiveSection(link.href.substring(1));
                }}
                aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
              >
                <span className="flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-1.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                  </svg>
                  {link.name}
                </span>
                {activeSection === link.href.substring(1) && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-(--color-gold) mx-4"
                    layoutId="navIndicator"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 transition-colors ${
                isScrolled ? 'text-(--color-garnet)' : 'text-(--color-ivory)'
              }`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >            <div className={`px-4 py-3 space-y-0.5 ${
              isScrolled ? 'bg-(--color-cardBg) shadow-lg' : 'bg-(--color-darkPlum)'
            }`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-md transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? isScrolled 
                        ? 'bg-(--color-goldTan/20) text-(--color-goldTan)' 
                        : 'bg-(--color-goldTan/20) text-(--color-goldTan)' 
                      : isScrolled 
                        ? 'text-(--color-garnet) hover:bg-(--color-goldTan/10)' 
                        : 'text-(--color-ivory) hover:bg-(--color-ivory/10)'
                  }`}
                  onClick={() => {
                    setActiveSection(link.href.substring(1));
                    setIsMobileMenuOpen(false);
                  }}
                  aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                >
                  <span className="flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                    </svg>
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;