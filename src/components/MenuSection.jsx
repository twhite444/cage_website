import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../utils/constants';
import { FaHamburger, FaPizzaSlice, FaBeer } from 'react-icons/fa';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('food');
  
  const categories = [
    { id: 'food', label: 'Food', icon: <FaHamburger className="h-5 w-5 mr-2" /> },
    { id: 'sides', label: 'Sides', icon: <FaPizzaSlice className="h-5 w-5 mr-2" /> },
    { id: 'drinks', label: 'Drinks', icon: <FaBeer className="h-5 w-5 mr-2" /> }
  ];
  
  return (
    <div id="menu"> 
      {/* Menu Hero Section */}
      <section className="relative w-full overflow-hidden min-h-[60vh] md:min-h-[50vh] flex flex-col items-center justify-center py-10 md:py-16"> {/* Reduced py */}
        {/* Background Image and Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/bar_photos/Le_Cage_01_APL.jpg"
            alt="The Cage bar interior background"
            className="w-full h-full object-cover opacity-50" // Kept opacity at 50 for better text readability over image
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-darkPlum/70 via-darkPlum/50 to-darkPlum/80"></div> {/* Adjusted gradient to be lighter */}
        </div>

        {/* Content for the Hero part (Title and Tabs) */}
        <div className="relative z-10 section-wrapper w-full text-center"> {/* section-wrapper for padding and max-width */}
          {/* Title section - updated text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-10 w-full" // Reduced mb
          >
            <div className="flex flex-col items-center justify-center mb-6">
              <h2 className="section-title section-title-decorated section-title-centered text-5xl md:text-6xl mb-8 text-goldTan">Our Menu</h2> {/* Responsive text size */}
              <div className="w-24 h-1 bg-gold rounded-full"></div>
            </div>
            <p className="body-text max-w-2xl mx-auto text-xl leading-relaxed font-medium text-ivory">
              Greasy, glorious, and always satisfying. What more could you want?
            </p>
          </motion.div>
          
          {/* Enhanced Category Tabs - with new icons */}
          <div className="flex justify-center w-full"> {/* Removed mb-16, spacing handled by hero padding */}
            <div className="inline-flex p-2 rounded-xl bg-warmGray/80 shadow-inner backdrop-blur-sm"> {/* Adjusted background for better contrast on image */}
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`tab-focus px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                    activeCategory === category.id 
                      ? 'bg-gold text-charcoal shadow' 
                      : 'bg-transparent text-ivory hover:bg-gold/20'
                  }`}
                  aria-selected={activeCategory === category.id}
                  role="tab"
                  aria-controls={`tabpanel-${category.id}`}
                  whileHover={{ scale: activeCategory !== category.id ? 1.05 : 1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.icon}
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items Section */}
      <section className="py-10 md:py-12 bg-warmGray w-full"> {/* Reduced py */}
        <div className="max-w-7xl mx-auto px-6 md:px-10"> {/* Adjusted section-wrapper for more horizontal padding and no vertical padding */} 
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory} // Key for AnimatePresence to track changes
              className="w-full" // Adjusted to be a container, grid applied conditionally
              role="tabpanel"
              id={`tabpanel-${activeCategory}`}
              aria-labelledby={`tab-${activeCategory}`}
              initial={{ opacity: 0, y: 20 }} // Animation for the container
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {Array.isArray(menuItems[activeCategory]) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  {menuItems[activeCategory].map((item, index) => (
                    <motion.div
                      key={`${activeCategory}-${index}-${item.name}`} // Adjusted key for better uniqueness
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }} // This will run if items are removed from the list while category is the same
                      transition={{ duration: 0.4, delay: index * 0.05 }} // Slightly reduced delay
                      className="bg-darkPlum rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group card-hover w-full"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-goldTan group-hover:text-gold transition-colors duration-300 font-display"> {/* Changed text colors */}
                            {item.name}
                          </h3>
                          <span className="inline-flex items-center justify-center text-lg font-bold bg-gold text-charcoal px-3 py-1 rounded-full shadow-sm"> {/* Changed text color */}
                            {item.price}
                          </span>
                        </div>
                        
                        <div className="w-full h-0.5 bg-goldTan my-3 group-hover:bg-gold transition-colors duration-300"></div> {/* Corrected color names */}
                        
                        <p className="text-ivory mb-4"> {/* Changed text color from text-gray-700 */}
                          {item.description}
                        </p>
                        
                        {/* Display options if they exist */}
                        {item.options && item.options.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-dashed border-warmGray-700"> {/* Changed border color */}
                            <h4 className="text-lg font-medium text-goldTan mb-2">Options</h4> {/* Changed text color */}
                            <ul className="space-y-2">
                              {item.options.map((option, idx) => (
                                <li key={idx} className="flex justify-between items-center">
                                  <span className="text-ivory">{option.name}</span> {/* Changed text color from text-gray-700 */}
                                  <span className="font-medium text-goldTan">{option.price}</span> {/* Changed text color */}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-2xl text-ivory font-semibold">{menuItems[activeCategory]}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-10 md:mt-12" // Reduced mt
          >
            <p className="body-text italic mb-6 text-ivory"> {/* Changed text color */}
              Got a complaint? The kitchen doesn't want to hear it, but we'll try anyway.
            </p>
            {/* <motion.a 
              href="#" 
              className="inline-flex items-center justify-center bg-garnet text-white px-5 py-2 rounded-md shadow-md hover:bg-red-700 transition-all duration-300" // Assuming brightGarnet is a shade of red, used red-700 as placeholder
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              View Full Menu
            </motion.a> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MenuSection;