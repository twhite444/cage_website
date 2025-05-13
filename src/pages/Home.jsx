import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PlanYourVisit from '../components/PlanYourVisit';
import HoursContact from '../components/HoursContact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <PlanYourVisit />
      <HoursContact />
      <Footer />
    </div>
  );
};

export default Home;