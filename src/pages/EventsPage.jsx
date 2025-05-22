import React from 'react';
import WeeklyEvents from '../components/WeeklyEvents';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EventsPage = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Background Image Div - covers the initial screen height */}
      <div className="absolute top-0 left-0 w-full h-screen z-[-1]"> {/* Positioned behind, covers viewport height */}
        <img 
          src="/cage_bar.png" 
          alt="" // Decorative background image
          className="w-full h-full object-cover opacity-50" // Covers area, slight opacity
        />
      </div>

      <Navbar /> {/* Navbar will sit on top of the background div */}
      
      <main className="flex-grow pt-20 w-full"> {/* pt-20 offsets content from Navbar */}
        <WeeklyEvents />
        {/* Removed the bottom placeholder img tag */}
      </main>
      
      <Footer /> {/* Footer will also sit on top */}
    </div>
  );
};

export default EventsPage;