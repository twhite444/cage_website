import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa'; // Import social icons
import { businessInfo } from '../utils/constants'; // Import businessInfo for social links

const Navbar = ({ isOnMenuPage, isOnEventsPage }) => { // Added isOnEventsPage prop
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
    { 
      name: 'Menu', 
      href: '/menu', 
      // Martini glass icon (even taller stem)
      icon: 'M4 6h16M5 6l7 9 7-9M12 15v7m-3 0h6', 
    },
    { 
      name: 'Events', 
      href: '/events', 
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' 
    },
  ];
  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOnMenuPage || isOnEventsPage // Added isOnEventsPage to condition
          ? `bg-darkPlum/95 backdrop-blur-sm shadow-md py-2 border-b border-goldTan/20`
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
                (isScrolled || isOnMenuPage || isOnEventsPage) ? 'py-1' : 'py-0' // Added isOnEventsPage to condition
              }`}
            />
          </a>
          
          {/* Desktop Navigation & Social Icons */}
          <nav className="hidden md:flex items-center" role="navigation"> {/* Removed space-x-1 here, will add to links if needed */}
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-md transition-all duration-300 font-medium ${
                    activeSection === link.href.substring(1)
                      ? (isScrolled || isOnMenuPage || isOnEventsPage) // Added isOnEventsPage
                        ? 'text-goldTan bg-warmGray/10' 
                        : 'text-goldTan bg-ivory/10' 
                      : (isScrolled || isOnMenuPage || isOnEventsPage) // Added isOnEventsPage
                        ? 'text-ivory hover:text-goldTan'
                        : 'text-ivory hover:text-goldTan hover:bg-ivory/10'
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
            </div>
            
            {/* Social Media Icons - Desktop */}
            <div className="flex items-center space-x-2 pl-4 ml-4 border-l border-ivory/20">
              <a 
                href={businessInfo.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="p-2 rounded-full hover:bg-goldTan/20 transition-colors duration-300 group"
              >
                <FaInstagram className={`w-5 h-5 ${isScrolled ? 'text-ivory' : 'text-ivory'} group-hover:text-goldTan transition-colors duration-150`} /> 
              </a>
              <a 
                href={businessInfo.social.facebook} // Use link from constants.js
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="p-2 rounded-full hover:bg-goldTan/20 transition-colors duration-300 group"
              >
                <FaFacebook className={`w-5 h-5 ${isScrolled ? 'text-ivory' : 'text-ivory'} group-hover:text-goldTan transition-colors duration-150`} />
              </a>
              <a 
                href={businessInfo.social.yelp} // Use link from constants.js
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Yelp"
                className="p-2 rounded-full hover:bg-goldTan/20 transition-colors duration-300 group"
              >
                <FaYelp className={`w-5 h-5 ${isScrolled ? 'text-ivory' : 'text-ivory'} group-hover:text-goldTan transition-colors duration-150`} />
              </a>
            </div>
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
                isScrolled ? 'text-(--color-ivory)' : 'text-(--color-ivory)' // Changed from text-(--color-garnet)
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
          >
            <div className={`px-4 pt-3 pb-4 space-y-1 ${
              isScrolled ? 'bg-cardBg shadow-lg' : 'bg-darkPlum'
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
                        ? 'text-(--color-ivory) hover:bg-(--color-goldTan/10)' // Changed from text-(--color-garnet)
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
              {/* Social Media Icons - Mobile */}
              <div className="pt-4 mt-4 border-t border-ivory/10 flex justify-center space-x-5">
                <a 
                  href={businessInfo.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="p-2 rounded-full hover:bg-goldTan/20 transition-colors duration-300 group"
                >
                  <FaInstagram className={`w-7 h-7 ${isScrolled ? 'text-ivory' : 'text-ivory'} group-hover:text-goldTan transition-colors duration-150`} />
                </a>
                <a 
                  href={businessInfo.social.facebook} // Use link from constants.js
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="p-2 rounded-full hover:bg-goldTan/20 transition-colors duration-300 group"
                >
                  <FaFacebook className={`w-7 h-7 ${isScrolled ? 'text-ivory' : 'text-ivory'} group-hover:text-goldTan transition-colors duration-150`} />
                </a>
                <a 
                  href={businessInfo.social.yelp} // Use link from constants.js
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Yelp"
                  className="p-2 rounded-full hover:bg-goldTan/20 transition-colors duration-300 group"
                >
                  <FaYelp className={`w-7 h-7 ${isScrolled ? 'text-ivory' : 'text-ivory'} group-hover:text-goldTan transition-colors duration-150`} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;