import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { businessInfo } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const todayDay = new Date().getDay();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = daysOfWeek[todayDay];
  
  // Get hours for today
  const hoursToday = () => {
    if (today === "Saturday" || today === "Sunday") {
      return "12:00 PM - Close";
    } else {
      return "12:00 PM - Close";
    }
  };
  
  return (
    <footer className="bg-(--color-darkPlum) text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {/* Left Column - Logo & Social */}
          <div>
            <h3 className="text-2xl font-bold font-display text-(--color-gold) mb-2">The Cage</h3>
            <p className="text-lg mb-6 text-(--color-ivory/90)">
              Good Grog. Good Times.
            </p>
            
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-transparent border border-(--color-ivory/20) hover:bg-(--color-gold/20) transition-colors duration-300"
              >
                <FaFacebook size={18} className="text-(--color-ivory)" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-transparent border border-(--color-ivory/20) hover:bg-(--color-gold/20) transition-colors duration-300"
              >
                <FaInstagram size={18} className="text-(--color-ivory)" />
              </a>
            </div>
            
            <details className="text-sm text-(--color-ivory/70) cursor-pointer group">
              <summary className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 mr-2 text-(--color-gold) group-open:rotate-90 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Est. 1969 at Bates College
              </summary>
              <p className="mt-2 pl-6 text-(--color-ivory/60)">
                Serving the Bates community for over 50 years
              </p>
            </details>
          </div>
          
          {/* Right Column - Contact Us & Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-(--color-gold)">Contact Us</h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-3 text-(--color-gold) mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-(--color-ivory)">{businessInfo.address}</span>
              </li>
              <li className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-3 text-(--color-gold) mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                </svg>
                <span className="text-(--color-ivory)">{businessInfo.phone}</span>
              </li>
              <li className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-3 text-(--color-gold) mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-(--color-ivory)">{businessInfo.email}</span>
              </li>
            </ul>
            
            <div>
              <h4 className="text-lg font-bold text-(--color-gold) mb-2">Hours Today</h4>
              <p className="text-(--color-ivory)">{hoursToday()}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-(--color-ivory/10) pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-(--color-ivory/60) mb-3 md:mb-0">
            © {currentYear} The Cage. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-(--color-ivory/60) hover:text-(--color-gold) transition-colors duration-300">Privacy Policy</a>
            <span className="text-sm text-(--color-ivory/60) hidden md:inline">|</span>
            <a href="#" className="text-sm text-(--color-ivory/60) hover:text-(--color-gold) transition-colors duration-300">Terms of Service</a>
            <span className="text-sm text-(--color-ivory/60) hidden md:inline">|</span>
            <a href="#" className="text-sm text-(--color-ivory/60) hover:text-(--color-gold) transition-colors duration-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;