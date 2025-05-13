import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-width background image with enhanced gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/public/cage_bar.png" 
          alt="" 
          className="w-full h-full object-cover"
          aria-hidden="true"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(18,18,18,0.9)] via-[rgba(30,30,30,0.75)] to-[rgba(37,37,37,0.6)]"></div>
        {/* Additional radial gradient for vignette effect */}
        <div className="absolute inset-0" 
             style={{background: 'radial-gradient(circle, transparent 40%, rgba(18,18,18,0.4) 100%)'}}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Increased hero text size with improved hierarchy */}
          <h1 className="text-6xl md:text-8xl font-bold text-(--color-ivory) mb-8 leading-tight font-display tracking-tight" style={{textShadow: '0 4px 12px rgba(0,0,0,0.5)'}}>
            <span className="text-(--color-gold) block md:inline" style={{textShadow: '0 4px 12px rgba(0,0,0,0.5)'}}>The Cage</span>
          </h1>
          <p className="text-2xl md:text-3xl text-(--color-gold) font-medium max-w-2xl mx-auto mb-6 font-display italic drop-shadow-lg">
            Good Grog. Good Times.
          </p>
          <p className="text-xl md:text-2xl text-(--color-ivory) max-w-2xl mx-auto mb-12 font-body">
            A neighborhood staple where Bates students and locals crowd in for cheap drinks, greasy food, and the kind of nights that turn into stories.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link 
                to="/menu" 
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center"
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
                className="btn-outline w-full sm:w-auto inline-flex items-center justify-center"
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
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
          document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' });
        }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="p-2 rounded-full bg-(--color-ivory)/20 backdrop-blur-sm">
          <FaChevronDown className="h-8 w-8 text-(--color-gold)" />
        </div>
        <span className="sr-only">Scroll down to visit section</span>
      </motion.div>
    </section>
  );
};

export default Hero;