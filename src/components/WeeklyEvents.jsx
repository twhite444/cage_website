import { useState } from 'react';
import { motion } from 'framer-motion';
import { weeklyEvents, businessInfo } from '../utils/constants';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const EventPosterCard = ({ event }) => {
  // Construct a more descriptive alt text
  const altText = `${event.name} poster - ${event.description} at The Cage on ${event.day || 'event day'} from ${event.time}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // Removed rounded-xl, shadow-xl, hover:shadow-gold-glow, group, transform, hover:-translate-y-1
      // Added focus styles for accessibility
      className="overflow-hidden flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-darkPlum"
      role="article" // More semantic role for a card-like element
      aria-label={`${event.name} Event Poster`}
    >
      <div className="aspect-[3/4] w-full overflow-hidden"> 
        {event.image ? (
          <img 
            src={event.image} 
            alt={altText} // Use constructed alt text
            // Removed group-hover:scale-105
            className="w-full h-full object-contain transition-transform duration-400 ease-in-out" // Changed object-cover to object-contain
            onError={(e) => { 
              e.target.onerror = null; 
              e.target.src = "/fallbacks/image-placeholder.svg"; 
            }}
            loading="lazy" // Added lazy loading
          />
        ) : (
          <div className="w-full h-full bg-warmGray flex items-center justify-center">
            <img 
              src="/fallbacks/image-placeholder.svg" 
              alt="Placeholder image for event poster"
              className="w-1/2 h-1/2 opacity-50"
            />
          </div>
        )}
      </div>
      {/* Removed the text block below the image */}
    </motion.div>
  );
};

const LiveMusicInstagramCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-gradient-to-br from-garnet to-brightGarnet rounded-xl shadow-xl hover:shadow-garnet-glow p-6 md:p-8 text-center flex flex-col justify-center items-center h-full transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center justify-center mb-4">
        <FaInstagram className="text-ivory text-5xl md:text-6xl" />
        <FaFacebook className="text-ivory text-5xl md:text-6xl ml-4" />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold font-display text-ivory mb-3">Weekend Live Music!</h3>
      <p className="text-ivory/90 text-base md:text-lg mb-6">
        Follow us on Instagram & Facebook for the latest updates on Friday & Saturday night bands, DJs, and special events!
      </p>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
        <motion.a 
          href={businessInfo.social.instagram}
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center bg-ivory text-garnet px-6 py-3 rounded-md shadow-md hover:bg-lightIvory transition-all duration-300 font-bold text-sm md:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaInstagram className="mr-2" /> View on Instagram
        </motion.a>
        <motion.a 
          href={businessInfo.social.facebook}
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center bg-ivory text-garnet px-6 py-3 rounded-md shadow-md hover:bg-lightIvory transition-all duration-300 font-bold text-sm md:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaFacebook className="mr-2" /> View on Facebook
        </motion.a>
      </div>
    </motion.div>
  );
};

const WeeklyEvents = () => {
  // Get current day, but adjust so Monday is 0, Sunday is 6 for easier filtering
  const todayNumeric = (new Date().getDay() + 6) % 7; 
  const [activeDayIndex, setActiveDayIndex] = useState(todayNumeric);

  const posterEvents = weeklyEvents.filter(day => 
    day.day === 'Tuesday' || day.day === 'Wednesday' || day.day === 'Thursday' || day.day === 'Sunday'
  );

  // Find the specific events for Friday and Saturday for the special card
  const fridayEvent = weeklyEvents.find(d => d.day === 'Friday')?.events[0];
  const saturdayEvent = weeklyEvents.find(d => d.day === 'Saturday')?.events[0];

  return (
    // Wrap with a div to contain the hero and the events content
    <div>
      {/* Events Hero Section */}
      <section className="relative w-full overflow-hidden min-h-[60vh] md:min-h-[50vh] flex flex-col items-center justify-center py-10 md:py-16">
        {/* Background Image and Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/bar_photos/Le_Cage_28_APL.jpg" // Updated image
            alt="The Cage bar interior - events background"
            className="w-full h-full object-cover" // Removed opacity-40
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-darkPlum/80 via-darkPlum/60 to-darkPlum/90"></div>
        </div>

        {/* Content for the Hero part (Title) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-10 w-full"
          >
            <div className="flex flex-col items-center justify-center mb-6">
              <h2 className="section-title section-title-decorated section-title-centered text-5xl md:text-6xl mb-8 text-goldTan">Weekly Shenanigans</h2>
              <div className="w-24 h-1 bg-gold rounded-full"></div>
            </div>
            <p className="body-text max-w-2xl mx-auto text-xl leading-relaxed font-medium text-ivory">
              Catch these events weekly! For live music on Friday & Saturday, check our Instagram for the latest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Actual Events Content Section */}
      <section id="events" className="py-10 md:py-12 bg-warmGray text-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Removed the redundant title and paragraph here as it's now in the hero */}
          
          {/* Grid for Poster-like Events */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {posterEvents.map(daySchedule => (
              daySchedule.events.map(event => (
                <EventPosterCard key={`${daySchedule.day}-${event.name}`} event={event} />
              ))
            ))}
          </div>

          {/* Section for Friday/Saturday Instagram Callout */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
            {(fridayEvent || saturdayEvent) && <LiveMusicInstagramCard />}
          </div>

        </div>
      </section>
    </div>
  );
};

export default WeeklyEvents;