import { motion } from 'framer-motion';
import { businessInfo } from '../utils/constants';

const HoursContact = () => {
  return (
    <section id="contact" className="py-20 bg-(--color-warmGray) relative w-full">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23A31F34' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}>
      </div>
      
      <div className="w-full max-w-[100%] mx-auto" style={{ 
        paddingLeft: 'clamp(1rem, 4vw, 5rem)', 
        paddingRight: 'clamp(1rem, 4vw, 5rem)' 
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="flex flex-col items-center justify-center mb-12 w-full">
            <h2 className="section-title section-title-decorated section-title-centered text-5xl mb-8">Hours & Contact</h2>
            <div className="w-24 h-1 bg-(--color-gold) rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mx-auto">            {/* Hours Card */}
            <motion.div 
              className="bg-(--color-cardBg) rounded-lg shadow-md border-l-4 border-(--color-gold) hover:shadow-lg hover:glow-gold transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-(--color-gold/10) mr-3 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-(--color-gold)" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold">Hours</h3>
                </div>
                  <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-(--color-ivory)">Monday - Friday</span>
                    <span className="font-bold text-(--color-garnet)">12:00 PM - Close</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-(--color-ivory)">Saturday - Sunday</span>
                    <span className="font-bold text-(--color-garnet)">10:00 AM - Close</span>
                  </div>
                </div>
              </div>
            </motion.div>            {/* Contact Card */}
            <motion.div 
              className="bg-(--color-cardBg) rounded-lg shadow-md border-l-4 border-(--color-garnet) hover:shadow-lg hover:glow-crimson transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-(--color-garnet/10) mr-3 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-(--color-garnet)" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold">Contact Info</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-(--color-garnet)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="text-(--color-garnet) hover:text-(--color-gold) transition-colors duration-200">
                      {businessInfo.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-(--color-garnet)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href={`mailto:${businessInfo.email}`} className="text-(--color-garnet) hover:text-(--color-gold) transition-colors duration-200">
                      {businessInfo.email}
                    </a>
                  </div>
                    <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-(--color-garnet)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-(--color-ivory)">{businessInfo.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoursContact;