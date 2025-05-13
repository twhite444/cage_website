import React from 'react';
import WeeklyEvents from '../components/WeeklyEvents';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EventsPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-16 w-full">
        <WeeklyEvents />
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;