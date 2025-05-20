import { useState } from 'react';
import { motion } from 'framer-motion';
import { weeklyEvents, businessInfo } from '../utils/constants';
import { FaInstagram } from 'react-icons/fa';

const EventPosterCard = ({ event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-cardBg rounded-xl shadow-xl hover:shadow-gold-glow overflow-hidden group transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      <div className="aspect-[3/4] w-full overflow-hidden">
        {/* Replaced AssetImage with standard img tag */}
        {event.image ? (
          <img 
            src={event.image} // Assumes event.image is a direct path in /public
            alt={event.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 ease-in-out"
            onError={(e) => { 
              // Optional: More sophisticated error handling or a different placeholder
              e.target.onerror = null; // Prevents looping if the fallback also fails
              e.target.src = "/fallbacks/image-placeholder.svg"; // Basic fallback
            }}
          />
        ) : (
          // Display a placeholder if no image is provided in constants
          <div className="w-full h-full bg-warmGray flex items-center justify-center">
            <img 
              src="/fallbacks/image-placeholder.svg" 
              alt="Placeholder"
              className="w-1/2 h-1/2 opacity-50"
            />
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow bg-warmGray">
        <h3 className="text-2xl font-bold font-display text-gold mb-2">{event.name}</h3>
        <p className="text-lightIvory text-sm mb-1">{event.time}</p>
        <p className="text-ivory/80 text-base flex-grow">{event.description}</p>
      </div>
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
      <FaInstagram className="text-ivory text-5xl md:text-6xl mb-4" />
      <h3 className="text-2xl md:text-3xl font-bold font-display text-ivory mb-3">Weekend Live Music!</h3>
      <p className="text-ivory/90 text-base md:text-lg mb-6">
        Follow us on Instagram for the latest updates on Friday & Saturday night bands, DJs, and special events!
      </p>
      <motion.a 
        href={`https://instagram.com/${businessInfo.social.instagram}`}
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center justify-center bg-ivory text-garnet px-6 py-3 rounded-md shadow-md hover:bg-lightIvory transition-all duration-300 font-bold text-sm md:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <FaInstagram className="mr-2" /> View on Instagram
      </motion.a>
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
    <section id="events" className="py-16 md:py-24 bg-darkPlum text-ivory">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title section-title-centered text-goldTan text-4xl md:text-5xl mb-4 font-display">Weekly Lineup</h2>
          <p className="body-text max-w-xl md:max-w-2xl mx-auto text-lg md:text-xl text-ivory/80">
            Catch these events weekly! For live music on Friday & Saturday, check our Instagram for the latest.
          </p>
        </motion.div>

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
  );
};

export default WeeklyEvents;