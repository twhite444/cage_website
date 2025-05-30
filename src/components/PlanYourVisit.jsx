import { motion } from 'framer-motion';
import { businessInfo } from '../utils/constants';

const PlanYourVisit = () => {
  // Create URL-safe address for Google Maps
  const mapAddress = encodeURIComponent(businessInfo.address);
    return (
    <section id="visit" className="py-16 bg-darkPlum w-full text-ivory"> {/* Changed background to darkPlum, default text to ivory */}
      <div className="w-full max-w-[100%] mx-auto" style={{ 
      paddingLeft: 'clamp(1rem, 4vw, 5rem)', 
      paddingRight: 'clamp(1rem, 4vw, 5rem)' 
      }}>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 w-full"
      >
      <div className="flex flex-col items-center justify-center mb-10 w-full">
      <h2 className="section-title section-title-decorated section-title-centered text-5xl mb-8 text-goldTan">Plan Your Visit</h2> {/* Changed title text to goldTan */}
      <div className="w-24 h-1 bg-gold rounded-full"></div> {/* Ensured decorative line is gold */}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 lg:gap-x-12 w-full">            {/* Left column with interactive map */}
      <motion.div 
      className="rounded-lg overflow-hidden shadow-lg border border-(--color-warmGray) glow-subtle w-full h-full"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      >
      {/* Real interactive map using iframe - updated with correct address */}
      <div className="aspect-video w-full h-full relative">
      <iframe 
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapAddress}`} 
      width="100%" 
      height="100%" 
      className="absolute inset-0 border-0"
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title={`Location of The Cage at ${businessInfo.address}`}
      ></iframe>
      </div>
      </motion.div>
      {/* Right column with enhanced info cards */}
      <div className="space-y-6 w-full">              <motion.div
      className="bg-(--color-cardBg) rounded-lg shadow-md p-6 border-l-4 border-(--color-garnet) hover:shadow-lg hover:glow-crimson hover:translate-y-[-2px] hover:border-l-6 transition-all duration-300"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      >
      <div className="flex items-start">
      <div className="mr-4 mt-1">
      <div className="w-10 h-10 bg-(--color-garnet/10) rounded-full flex items-center justify-center">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 text-(--color-garnet)" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        >
        <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
        />
        <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
        />
        </svg>
      </div>
      </div>                  <div>
      <h3 className="subtitle mb-2 font-display">Location</h3>
      <p className="body-text text-(--color-ivory)">{businessInfo.address}</p>
      </div>
      </div>
      </motion.div>                <motion.div
      className="bg-(--color-cardBg) rounded-lg shadow-md p-6 border-l-4 border-(--color-goldTan) hover:shadow-lg hover:glow-gold hover:translate-y-[-2px] hover:border-l-6 transition-all duration-300"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      >                <div className="flex items-start">
      <div className="mr-4 mt-1">
      <div className="w-10 h-10 bg-(--color-goldTan/10) rounded-full flex items-center justify-center">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-(--color-goldTan)" // Slightly larger icon for visibility
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={2}
        >
        {/* Parking Icon "P" */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 16V8h4a2 2 0 012 2v2a2 2 0 01-2 2H9z" />
        <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      </div>                  <div>
      <h3 className="subtitle mb-2 font-display">Parking</h3> {/* Added Subtitle for consistency */}
      <p className="body-text text-(--color-ivory)"> {/* Ensured body text is ivory */}
  Street parking available on Ash Street        </p>
      </div>
      </div>
      </motion.div>
      <motion.div
      className="mt-8 text-center"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.5 }}
      >
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-4">                  <motion.a
      href={`https://maps.google.com/?q=${mapAddress}`}
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-3 bg-(--color-garnet) text-(--color-ivory) rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:glow-crimson"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
      </svg>
      Google Maps
      </motion.a>                  <motion.a
      href={`http://maps.apple.com/?address=99%20Ash%20Street,%20Lewiston,%20ME`}
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-3 bg-(--color-goldTan) text-(--color-darkPlum) rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:glow-gold"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      >                    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
      </svg>
      Apple Maps
      </motion.a>
      </div>                  <motion.a
      href="tel:+12077830668"
      className="btn-outline bg-transparent text-goldTan border-goldTan hover:bg-goldTan/10 mt-4 inline-flex items-center" /* Adjusted button style for better visibility */
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      >
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5 mr-2" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
      </svg>
      Call Us
      </motion.a>
      </motion.div>
      </div>
      </div>
      </motion.div>
      </div>
    </section>
    );
};

export default PlanYourVisit;