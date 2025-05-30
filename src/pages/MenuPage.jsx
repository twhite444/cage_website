import React from 'react';
import MenuSection from '../components/MenuSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MenuPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-darkPlum"> {/* Added bg-darkPlum */}
      <Navbar isOnMenuPage={true} />
      <main className="flex-grow w-full pt-[4.5rem]"> {/* Changed pt-20 to pt-[4.5rem] */}
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;