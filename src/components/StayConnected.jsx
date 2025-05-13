import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * StayConnected component that displays the most recent Instagram posts.
 * 
 * To use this component:
 * 1. Sign up at https://lightwidget.com/ (it's free)
 * 2. Connect your Instagram account
 * 3. Create a widget for 3 columns
 * 4. Replace the widgetId below with your own widget ID from LightWidget
 */
const StayConnected = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const instagramAccount = "batescagestuff";
  // Replace this with your actual widget ID from LightWidget
  const widgetId = "c0b583f83b4daa96f90b9e86c2b7a1";

  useEffect(() => {
    // Create and inject the LightWidget script
    const script = document.createElement('script');
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="social" className="py-20 bg-(--color-darkPlum) w-full overflow-hidden">
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
            <h2 className="section-title section-title-decorated section-title-centered">Stay Connected</h2>
            <div className="w-24 h-1 bg-(--color-gold) rounded-full mt-8"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-lg text-(--color-lightIvory) max-w-2xl mx-auto">
              Follow us on Instagram <a 
                href={`https://instagram.com/${instagramAccount}`} 
                className="text-(--color-gold) hover:text-(--color-goldTan) transition-colors duration-300 font-medium"
                target="_blank" 
                rel="noopener noreferrer"
              >@{instagramAccount}</a> for the latest updates, events, and behind-the-scenes at The Cage.
            </p>
          </motion.div>
          
          <div className="instagram-feed-container">
            {/* Custom styled Instagram feed container */}
            <div className="relative">          {/* Loading skeleton while iframe loads */}
              {!isLoaded && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3].map((item) => (
                    <div 
                      key={item} 
                      className="aspect-square rounded-lg bg-(--color-cardBg) shimmer-effect overflow-hidden relative"
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-(--color-darkPlum) to-transparent">
                        <div className="h-4 w-2/3 bg-(--color-warmGray) rounded shimmer-effect"></div>
                        <div className="h-3 w-1/2 bg-(--color-warmGray) rounded mt-2 shimmer-effect"></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
                {/* LightWidget Embed */}
              <iframe 
                src={`https://cdn.lightwidget.com/widgets/${widgetId}.html`}
                scrolling="no" 
                allowTransparency="true" 
                className={`lightwidget-widget w-full ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
                style={{ 
                  border: 0, 
                  overflow: 'hidden', 
                  transition: 'opacity 0.5s ease',
                  height: '410px',
                  borderRadius: '0.5rem',
                  boxShadow: 'var(--shadow-md)'
                }}
                title="The Cage Instagram Feed"
              ></iframe>
            </div>
            
            {/* Follow button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-center mt-10"
            >
              <motion.a
                href={`https://instagram.com/${instagramAccount}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-(--color-garnet) text-(--color-ivory) rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300 gap-2 hover:shadow-(--shadow-glow-garnet)"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-5 h-5"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Follow Us on Instagram
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StayConnected;
