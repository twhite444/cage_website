import React from 'react';
import WeeklyEvents from '../components/WeeklyEvents';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EventsPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-darkPlum"> {/* Ensure root div has dark background and flex col */}
      {/* Removed the absolute positioned background image div */}

      <Navbar isOnEventsPage={true} /> {/* Pass isOnEventsPage prop */}
      
      <main className="flex-grow pt-[4.5rem] w-full"> {/* Consistent padding-top */}
        <WeeklyEvents />
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsPage;