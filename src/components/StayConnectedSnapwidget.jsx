import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * StayConnectedSnapwidget component that displays the most recent Instagram posts using Snapwidget.
 *
 * To use this component:
 * 1. Go to Snapwidget.com and create a free widget.
 * 2. Configure it for the Instagram account (e.g., batescagestuff).
 * 3. Get the embed code. You will need the 'data-id' and potentially other parameters.
 *    The script src is usually "https://snapwidget.com/js/snapwidget.js".
 *    The iframe src will be like "https://snapwidget.com/embed/YOUR_WIDGET_ID_HERE".
 *    For public accounts, direct embedding might be possible without logging in.
 */
const StayConnectedSnapwidget = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const instagramAccount = "batescagestuff";
  // Replace with your Snapwidget embed ID (from the iframe src)
  const snapwidgetEmbedId = "1049777"; // Example ID, replace with your actual one

  useEffect(() => {
    // Snapwidget's script might auto-initialize iframes with class 'snapwidget-widget'
    // or you might need to call a function. For simplicity, we'll rely on the iframe.
    // If issues arise, check Snapwidget docs for specific JS initialization.
    const script = document.createElement('script');
    script.src = "https://snapwidget.com/js/snapwidget.js";
    script.async = true;
    script.onload = () => {
      // Snapwidget might have its own way to signal load, or we can assume iframe load
      // For now, we'll set loaded, but the iframe's onload is more reliable for content visibility
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Clean up any global objects Snapwidget might have created if necessary
    };
  }, []);

  return (
    <section id="social-snapwidget" className="py-20 bg-(--color-darkPlum) w-full overflow-hidden">
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
            <h2 className="section-title section-title-decorated section-title-centered">Stay Connected (Snapwidget)</h2>
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
            <div className="relative">
              {/* Loading skeleton - can be simplified if Snapwidget handles it well */}
              {!isLoaded && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3].map((item) => (
                    <div 
                      key={item} 
                      className="aspect-square rounded-lg bg-(--color-cardBg) shimmer-effect overflow-hidden relative"
                    >
                      {/* Simplified skeleton item */}
                    </div>
                  ))}
                </div>
              )}
              {/* Snapwidget Embed */}
              {/* You'll need to get the correct embed URL from Snapwidget */}
              <iframe
                src={`https://snapwidget.com/embed/${snapwidgetEmbedId}`}
                className="snapwidget-widget" // Snapwidget uses this class
                allowTransparency="true"
                frameBorder="0"
                scrolling="no"
                style={{
                  width: '100%',
                  height: '500px', // Adjust height as needed
                  border: 'none',
                  overflow: 'hidden',
                  borderRadius: '0.5rem',
                  boxShadow: 'var(--shadow-md)',
                  opacity: isLoaded ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
                }}
                title="The Cage Instagram Feed (Snapwidget)"
                onLoad={() => setIsLoaded(true)} // Use iframe's onload to set loaded state
              ></iframe>
            </div>
            
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

export default StayConnectedSnapwidget;
