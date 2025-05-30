import React, { useEffect, useRef } from 'react'; // Added useEffect, useRef
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  const particlesContainerRef = useRef(null);
  const sphere1Ref = useRef(null);
  const sphere2Ref = useRef(null);
  const sphere3Ref = useRef(null);

  useEffect(() => {
    const container = particlesContainerRef.current;
    if (!container) return;

    const particleCount = 80;
    const particles = [];

    function createParticleElement() {
      const particle = document.createElement('div');
      particle.className = 'particle-hero'; // Updated class name
      // Style with theme color (ivory)
      particle.style.background = 'var(--color-ivory, #F8F4EC)'; 
      return particle;
    }

    function resetParticle(particle, isInitial = false) {
      const posX = Math.random() * 100;
      const posY = isInitial ? Math.random() * 100 : 100; // Start from bottom if not initial
      const size = Math.random() * 3 + 1;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = '0';
      
      return { x: posX, y: posY, element: particle };
    }

    function animateParticle(particleData) {
      const { element } = particleData;
      resetParticle(element);

      const duration = Math.random() * 10 + 10; // seconds
      const delay = Math.random() * 5; // seconds

      setTimeout(() => {
        element.style.transition = `all ${duration}s linear`;
        element.style.opacity = (Math.random() * 0.3 + 0.1).toString();
        
        const moveX = parseFloat(element.style.left) + (Math.random() * 20 - 10);
        const moveY = parseFloat(element.style.top) - (Math.random() * 80 + 20); // Move upwards more significantly
        
        element.style.left = `${moveX}%`;
        element.style.top = `${moveY}%`;
        
        setTimeout(() => {
          if (document.body.contains(element)) { // Check if particle is still in DOM
            animateParticle(particleData);
          }
        }, duration * 1000);
      }, delay * 1000);
    }

    for (let i = 0; i < particleCount; i++) {
      const pElement = createParticleElement();
      container.appendChild(pElement);
      const pData = { element: pElement };
      particles.push(pData);
      animateParticle(pData);
    }

    const handleMouseMove = (e) => {
      if (!container) return;
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      // Create temporary mouse particle
      const tempParticle = createParticleElement();
      const tempSize = Math.random() * 4 + 2;
      tempParticle.style.width = `${tempSize}px`;
      tempParticle.style.height = `${tempSize}px`;
      tempParticle.style.left = `${mouseX}%`;
      tempParticle.style.top = `${mouseY}%`;
      tempParticle.style.opacity = '0.6';
      container.appendChild(tempParticle);

      setTimeout(() => {
        tempParticle.style.transition = 'all 2s ease-out';
        tempParticle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        tempParticle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        tempParticle.style.opacity = '0';
        setTimeout(() => {
          if (tempParticle.parentElement) {
            tempParticle.remove();
          }
        }, 2000);
      }, 10);

      // Subtle movement of gradient spheres
      const spheres = [sphere1Ref.current, sphere2Ref.current, sphere3Ref.current];
      const moveFactor = 5; // How much spheres react to mouse
      const offsetX = (e.clientX / window.innerWidth - 0.5) * moveFactor;
      const offsetY = (e.clientY / window.innerHeight - 0.5) * moveFactor;

      spheres.forEach(sphere => {
        if (sphere) {
          // This direct manipulation might conflict with CSS animation if both use `transform`.
          // For a robust solution, CSS variables or JS-only animation for spheres might be better.
          // Keeping it simple as per example for now.
          sphere.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(p => {
        if (p.element.parentElement) p.element.remove();
      });
      particles.length = 0; // Clear array
    };
  }, []);


  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darkPlum" // Base background
    >
      {/* New Gradient Background Elements */}
      <div className="gradient-background-hero">
        <img
          src="/cage_bar.png"
          alt="The Cage bar interior with patrons"
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30" // Added opacity for better blending
        />
        <div ref={sphere1Ref} className="gradient-sphere-hero sphere-1-hero"></div>
        <div ref={sphere2Ref} className="gradient-sphere-hero sphere-2-hero"></div>
        <div ref={sphere3Ref} className="gradient-sphere-hero sphere-3-hero"></div>
        <div className="glow-hero"></div>
        <div className="grid-overlay-hero"></div>
        <div className="noise-overlay-hero"></div>
        <div className="particles-container-hero" ref={particlesContainerRef}></div>
      </div>
      
      {/* Existing Content - ensure it's on top */}
      <div className="container mx-auto px-4 z-10 relative"> {/* Added relative for stacking context if needed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Increased hero text size with improved hierarchy */}
          <h1 className="text-6xl md:text-8xl font-bold text-ivory mb-8 leading-tight font-display tracking-tight" style={{textShadow: '0 4px 12px rgba(0,0,0,0.5)'}}>
            <span className="text-gold block md:inline" style={{textShadow: '0 4px 12px rgba(0,0,0,0.5)'}}>The Cage</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gold font-medium max-w-2xl mx-auto mb-6 font-display italic drop-shadow-lg">
            Good Grog. Good Times.
          </p>
          <p className="text-xl md:text-2xl text-ivory max-w-2xl mx-auto mb-12 font-body">
            A neighborhood staple where Bates students and locals crowd in for cheap drinks, greasy food, and the kind of nights that turn into stories.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link 
                to="/menu" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-transparent text-ivory font-semibold rounded-lg shadow-lg border-2 border-gold hover:bg-gold hover:text-black transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                View Our Menu
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link 
                to="/events" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-transparent text-ivory font-semibold rounded-lg shadow-lg border-2 border-gold hover:bg-gold hover:text-black transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Weekly Events
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator with subtle animation */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-20" // Ensure scroll indicator is on top
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.2,
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2
          }
        }}
        onClick={() => {
          // Attempt to scroll to a section; ensure an element with id "visit" exists or change target
          document.getElementById('weekly-events-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="p-2 rounded-full bg-ivory/20 backdrop-blur-sm"> {/* Use theme colors */}
          <FaChevronDown className="h-8 w-8 text-gold" /> {/* Use theme colors */}
        </div>
        <span className="sr-only">Scroll down</span>
      </motion.div>
    </section>
  );
};

export default Hero;