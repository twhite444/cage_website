import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PlanYourVisit from '../components/PlanYourVisit';
// import HoursContact from '../components/HoursContact'; // Removed import
import ImageCarousel from '../components/ImageCarousel'; // Added import for ImageCarousel
import StayConnected from '../components/StayConnected';
import Footer from '../components/Footer';

// Define the list of images for the carousel
const barImages = [
  'Le_Cage_01_APL.jpg',
  'Le_Cage_03_APL.jpg',
  'Le_Cage_04_APL.jpg',
  'Le_Cage_05_APL.jpg',
  'Le_Cage_07_APL.jpg',
  'Le_Cage_08_APL.jpg',
  'Le_Cage_10_APL.jpg',
  'Le_Cage_11_APL.jpg',
  'Le_Cage_12_APL.jpg',
  'Le_Cage_14_APL.jpg',
  'Le_Cage_16_APL.jpg',
  'Le_Cage_19_APL.jpg',
  'Le_Cage_20_APL.jpg',
  'Le_Cage_22_APL.jpg',
  'Le_Cage_26_APL.jpg',
  'Le_Cage_29_APL.jpg',
  'Le_Cage_32_APL.jpg',
  'Le_Cage_35_APL.jpg',
  'Le_Cage_39_APL.jpg'
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <PlanYourVisit />
      <ImageCarousel images={barImages} /> {/* Added ImageCarousel */}
      {/* <HoursContact /> */}{/* Removed component */}
      <StayConnected />
      <Footer />
    </div>
  );
};

export default Home;