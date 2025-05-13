import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weeklyEvents } from '../utils/constants';

const getDayIcon = (day) => {
  switch (day) {
    case 'Monday':
      return 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z';
    case 'Tuesday':
      return 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10';
    case 'Wednesday':
      return 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01';
    case 'Thursday':
      return 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z';
    case 'Friday':
      return 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z';
    case 'Saturday':
      return 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z';
    case 'Sunday':
      return 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6';
    default:
      return 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z';
  }
};

const getEventIcon = (eventName) => {
  if (eventName.includes('Mic')) return 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z';
  if (eventName.includes('Book')) return 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253';
  if (eventName.includes('Trivia')) return 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
  if (eventName.includes('Acoustic')) return 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3';
  if (eventName.includes('Art')) return 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z';
  if (eventName.includes('DJ')) return 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z';
  if (eventName.includes('Karaoke')) return 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z';

  return 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z';
};

const EventCard = ({ event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="bg-(--color-ivory/10) hover:bg-(--color-ivory/15) rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-300 group relative overflow-hidden card-hover"
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-(--color-gold) mb-2 group-hover:translate-y-0.5 transition-transform duration-300 font-display">
          {event.title}
        </h3>
        <div className="w-full h-0.5 bg-(--color-gold/50) my-3 group-hover:bg-(--color-gold) transition-colors duration-300"></div>
        <p className="text-white mb-3">{event.time}</p>
        <p className="text-white text-opacity-80">{event.description}</p>
        
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover rounded-md mt-4 shadow-sm"
          />
        )}
      </div>
    </motion.div>
  );
};

const WeeklyEvents = () => {
  const [activeDay, setActiveDay] = useState(0);
  
  return (
    <section id="events" className="py-20 bg-(--color-darkPlum) text-(--color-ivory)">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center justify-center mb-6">
            <h2 className="section-title text-(--color-gold) text-5xl mb-8 font-display">Weekly Shenanigans</h2>
            <div className="w-24 h-1 bg-(--color-gold) rounded-full"></div>
          </div>
          <p className="body-text max-w-2xl mx-auto text-xl text-(--color-ivory) opacity-90">
            Every night brings something different. Come for the cheap drinks, stay for the memories you might not remember.
          </p>
        </motion.div>
        
        {/* Enhanced days scrollable navigation */}
        <div className="overflow-x-auto pb-4 mb-10 -mx-4 px-4 hide-scrollbar">
          <div className="flex space-x-3 min-w-max px-1">
            {weeklyEvents.map((day, index) => (
              <motion.button
                key={day.day}
                onClick={() => setActiveDay(index)}
                className={`relative py-3 px-5 rounded-lg transition-all duration-300 min-w-36 ${
                  index === activeDay
                    ? 'bg-(--color-gold) text-(--color-darkPlum) shadow-lg'
                    : 'bg-(--color-darkPlum) text-(--color-ivory) border border-(--color-gold/30) hover:border-(--color-gold/70)'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-pressed={index === activeDay}
              >
                <div className="flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d={getDayIcon(day.day)} 
                    />
                  </svg>
                  <span className="font-medium">{day.day}</span>
                </div>
                {index === activeDay && (
                  <motion.div 
                    className="absolute bottom-0 left-1/2 w-1/2 h-0.5 bg-(--color-darkPlum) -mb-1 transform -translate-x-1/2"
                    layoutId="dayIndicator"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Events for the selected day with enhanced cards */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {weeklyEvents[activeDay].events.length === 0 ? (
            <div className="col-span-full text-center py-10">
              <p className="text-xl text-(--color-ivory)">No events scheduled for this day.</p>
            </div>
          ) : (
            weeklyEvents[activeDay].events.map((event, index) => (
              <EventCard key={`${weeklyEvents[activeDay].day}-${index}`} event={event} />
            ))
          )}
        </motion.div>
        
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <motion.a 
            href="https://www.instagram.com/batescagestuff/" 
            className="inline-flex items-center justify-center bg-(--color-gold) text-(--color-darkPlum) px-6 py-3 rounded-md shadow-md hover:bg-(--color-gold/90) hover:shadow-lg transition-all duration-300 font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Follow our instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WeeklyEvents;