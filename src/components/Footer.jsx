import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail, MdWatchLater } from 'react-icons/md';
import { businessInfo } from '../utils/constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const todayDay = new Date().getDay();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = daysOfWeek[todayDay];
  
  // Get hours for today
  const hoursToday = () => {
    const day = today.toLowerCase();
    return businessInfo.hours[day] || "12:00 PM - Close";
  };

  // Animation for footer elements
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <footer className="bg-darkPlum text-ivory pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background texture or pattern */}
      <div className="absolute inset-0 bg-[url('/textures/noise-dark.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-goldTan to-gold"></div>
        <div className="container mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >{/* Column 1: Logo & About */}
          <motion.div variants={footerAnimation} className="flex flex-col items-center"> {/* Added flex flex-col items-center */}
            <h3 className="text-3xl font-bold font-display text-garnet mb-4 text-center">The Cage</h3> {/* Added text-center */}
            <p className="text-lg mb-6 text-gold text-center"> {/* Added text-center */}
              Good Grog. Good Times.
            </p>
            
            
            {/* Social Media Icons with improved styling */}
            <div className="flex space-x-4"> {/* This div will be centered by its parent's items-center */}
              <a 
                href={businessInfo.social.instagram} // Corrected to use the full URL from constants
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-warmGray hover:bg-goldTan/20 border border-gold/20 transition-all duration-300 group"
              >
                <FaInstagram size={18} className="text-gold group-hover:text-gold" />
              </a>
              <a 
                href={businessInfo.social.facebook} // Corrected to use Facebook URL from constants
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-warmGray hover:bg-goldTan/20 border border-gold/20 transition-all duration-300 group"
              >
                <FaFacebook size={18} className="text-gold group-hover:text-gold" />
              </a>
              <a 
                href={businessInfo.social.yelp} // Corrected to use Yelp URL from constants
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Yelp"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-warmGray hover:bg-goldTan/20 border border-gold/20 transition-all duration-300 group"
              >
                <FaYelp size={18} className="text-gold group-hover:text-gold" />
              </a>
            </div>          </motion.div>
          
          {/* Column 2: Contact Info */}
          <motion.div variants={footerAnimation}>
            <h3 className="text-lg font-bold text-gold mb-5 font-display">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MdLocationOn className="text-gold text-xl mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-ivory/80">{businessInfo.address}</span>
              </li>
              <li className="flex items-start">
                <MdPhone className="text-gold text-xl mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-ivory/80">{businessInfo.phone}</span>
              </li>
              <li className="flex items-start">
                <MdEmail className="text-gold text-xl mr-3 mt-0.5 flex-shrink-0" />
                <a 
                  href={`mailto:${businessInfo.email}`} 
                  className="text-ivory/80 hover:text-gold transition-colors duration-300"
                >
                  {businessInfo.email}
                </a>
              </li>
            </ul>          </motion.div>
          
          {/* Column 3: Hours */}
          <motion.div variants={footerAnimation}>
            <h3 className="text-lg font-bold text-gold mb-5 font-display">Hours</h3>
            <div className="mb-4">
              <h4 className="flex items-center text-gold mb-2">
                <MdWatchLater className="text-gold text-xl mr-2" />
                <span>Today ({today})</span>
              </h4>
              <p className="text-ivory/80 ml-7">{hoursToday()}</p>
            </div>
            
            {/* Additional hours information with expandable details */}
            <details className="group cursor-pointer">
              <summary className="text-ivory/80 hover:text-gold transition-colors duration-300 flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 text-gold group-open:rotate-90 transition-transform duration-300 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                View All Hours
              </summary>
              <div className="mt-3 ml-6 space-y-1 text-sm">
                <p className="flex justify-between text-ivory/70">
                  <span>Monday:</span>
                  <span>{businessInfo.hours.monday}</span>
                </p>
                <p className="flex justify-between text-ivory/70">
                  <span>Tuesday:</span>
                  <span>{businessInfo.hours.tuesday}</span>
                </p>
                <p className="flex justify-between text-ivory/70">
                  <span>Wednesday:</span>
                  <span>{businessInfo.hours.wednesday}</span>
                </p>
                <p className="flex justify-between text-ivory/70">
                  <span>Thursday:</span>
                  <span>{businessInfo.hours.thursday}</span>
                </p>
                <p className="flex justify-between text-ivory/70">
                  <span>Friday:</span>
                  <span>{businessInfo.hours.friday}</span>
                </p>
                <p className="flex justify-between text-ivory/70">
                  <span>Saturday:</span>
                  <span>{businessInfo.hours.saturday}</span>
                </p>
                <p className="flex justify-between text-ivory/70">
                  <span>Sunday:</span>
                  <span>{businessInfo.hours.sunday}</span>
                </p>
              </div>
            </details>
          </motion.div>
        </motion.div>
        
        {/* Divider with gold gradient */}
        <div className="h-px bg-gradient-to-r from-gold/5 via-gold/20 to-gold/5 my-8"></div>
        
        {/* Bottom section with copyright and links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-ivory/60 mb-4 md:mb-0">
            © {currentYear} The Cage at Bates College. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="#" className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300 mb-2 md:mb-0">Privacy Policy</a>
            <a href="#" className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300 mb-2 md:mb-0">Terms of Service</a>
            <a href="#" className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300 mb-2 md:mb-0">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;