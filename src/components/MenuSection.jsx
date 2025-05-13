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
    <section id="menu" className="py-20 bg-(--color-lightIvory) w-full">
      <div className="section-wrapper">
        {/* Title section - updated text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 w-full"
        >
          <div className="flex flex-col items-center justify-center mb-6">
            <h2 className="section-title section-title-decorated section-title-centered text-5xl mb-8">Our Menu</h2>
            <div className="w-24 h-1 bg-(--color-gold) rounded-full"></div>
          </div>
          <p className="body-text max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            Greasy, glorious, and always satisfying. What more could you want?
          </p>
        </motion.div>
        
        {/* Enhanced Category Tabs - with new icons */}
        <div className="flex justify-center mb-16 w-full">
          <div className="inline-flex p-2 rounded-xl bg-(--color-warmGray/30) shadow-inner">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`tab-focus px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  activeCategory === category.id 
                    ? 'bg-(--color-gold) text-(--color-darkPlum) shadow' 
                    : 'bg-transparent text-(--color-darkPlum) hover:bg-(--color-gold/20)'
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
        
        {/* Menu Items with options */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          role="tabpanel"
          id={`tabpanel-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
        >
          <AnimatePresence mode="wait">
            {menuItems[activeCategory].map((item, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group card-hover w-full"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-(--color-garnet) group-hover:text-(--color-brightGarnet) transition-colors duration-300 font-display">
                      {item.name}
                    </h3>
                    <span className="inline-flex items-center justify-center text-lg font-bold bg-(--color-gold) text-(--color-darkPlum) px-3 py-1 rounded-full shadow-sm">
                      {item.price}
                    </span>
                  </div>
                  
                  <div className="w-full h-0.5 bg-(--color-goldTan) my-3 group-hover:bg-(--color-gold) transition-colors duration-300"></div>
                  
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  
                  {/* Display options if they exist */}
                  {item.options && item.options.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-dashed border-(--color-warmGray)">
                      <h4 className="text-lg font-medium text-(--color-darkPlum) mb-2">Options</h4>
                      <ul className="space-y-2">
                        {item.options.map((option, idx) => (
                          <li key={idx} className="flex justify-between items-center">
                            <span className="text-gray-700">{option.name}</span>
                            <span className="font-medium text-(--color-garnet)">{option.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="body-text italic mb-6 text-(--color-garnet)">
            Got a complaint? The kitchen doesn't want to hear it, but we'll try anyway.
          </p>
          <motion.a 
            href="#" 
            className="inline-flex items-center justify-center bg-(--color-garnet) text-white px-5 py-2 rounded-md shadow-md hover:bg-(--color-brightGarnet) transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            View Full Menu
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;