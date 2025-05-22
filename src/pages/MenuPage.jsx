import React from 'react';
import MenuSection from '../components/MenuSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MenuPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-charcoal">
      <Navbar />
      <main className="flex-grow pt-16 w-full bg-charcoal">
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;