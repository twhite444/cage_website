import { motion } from 'framer-motion';
// import { getPublicPath } from '../utils/assetUtils'; // Commenting out as getPublicPath might not be needed if AssetImage handles paths
// Removed AssetImage import

const LoadingIndicator = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-darkPlum/80 backdrop-blur-sm z-50">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          {[0, 1, 2].map((index) => (
            <motion.div 
              key={index}
              className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-goldTan"
              initial={{ scale: 0.6, opacity: 0.8 }}
              animate={{ 
                scale: [0.6, 1.2, 0.6], 
                opacity: [0.8, 0.2, 0.8],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                delay: index * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            /> // Corrected self-closing tag
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Replaced AssetImage with standard img tag */}
            <img 
              src="/tab_logo.png" // Assuming tab_logo.png is in the public folder
              alt="The Cage logo" 
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
        <motion.p 
          className="text-ivory font-display"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingIndicator;