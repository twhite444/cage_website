import { motion } from 'framer-motion';
import { businessInfo } from '../utils/constants';
import React from 'react';
import LeafletMap from './LeafletMap'; // Import the LeafletMap component

const PlanYourVisit = () => {
  const mapAddress = encodeURIComponent(businessInfo.address);

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const todaysHours = businessInfo.hours[today] || 'Hours not available';

  return (
    <section id="visit" className="pb-16 bg-darkPlum w-full text-ivory">
      <div className="w-full max-w-[100%] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start w-full"> {/* Changed items-center to items-start */}
            {/* Left column with interactive map */}
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden z-10"> {/* Added z-10 */}
              <LeafletMap />
              <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-darkPlum to-transparent pointer-events-none"></div>
            </div>

            {/* Right column with new content */}
            <div className="pt-16 space-y-8 w-full flex flex-col items-center md:items-start"> {/* Increased pt-12 to pt-16 and space-y-6 to space-y-8 */}
              <motion.h2 
                className="text-4xl font-bold text-goldTan mb-4 font-display"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Come Find Us
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center md:text-left" // Ensured this div also benefits from parent's space-y-6
              >
                <h3 className="text-2xl font-semibold text-ivory mb-1 font-display">Today's Hours:</h3>
                <p className="text-xl text-goldTan">{todaysHours}</p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center md:justify-start" // Removed mt-8
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.a
                  href={`https://maps.google.com/?q=${mapAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-goldTan text-darkPlum rounded-full shadow-md hover:bg-gold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold w-full sm:w-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                  Google Maps
                </motion.a>
                <motion.a
                  href={`http://maps.apple.com/?address=${mapAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-goldTan text-darkPlum rounded-full shadow-md hover:bg-gold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold w-full sm:w-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                  Apple Maps
                </motion.a>
              </motion.div>
              
              <motion.a
                href={`tel:${businessInfo.phone}`}
                className="btn-outline bg-transparent text-goldTan border-goldTan hover:bg-goldTan/10 inline-flex items-center justify-center md:justify-start text-lg px-6 py-3 w-full sm:w-auto max-w-md" // Removed mt-6
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                </svg>
                Call Us: {businessInfo.phone}
              </motion.a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanYourVisit;