import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ images }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderDetailRef = useRef(null);
  const sliderStripRef = useRef(null);

  useEffect(() => {
    setNav1(sliderDetailRef.current);
    setNav2(sliderStripRef.current);
  }, []); // Runs once after initial mount to link the sliders

  if (!images || images.length === 0) {
    return <div className="text-center py-12 text-ivory">No images to display.</div>;
  }

  const settingsDetail = {
    slidesToShow: 1,
    arrows: false,
    asNavFor: nav2, // Use state for the nav reference
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const settingsStrip = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: nav1, // Use state for the nav reference
    dots: false,
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <section className="section-project bg-darkPlum py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="section__title text-goldTan text-4xl md:text-5xl font-bold">Gallery</h2>
        {/* Optional: Subtitle if needed 
        <small className="section__subtitle text-ivory/70">
          A glimpse into The Cage
        </small>
        */}
      </div>

      <div className="project-carousel relative py-12">
        {/* Main Screen - Larger Image */}
        <div className="project-screen max-w-3xl mx-auto mb-4 relative"> {/* Reduced mb-12 to mb-4 */}
          <div className="project-detail mx-auto" style={{ maxWidth: '578px'}}>
            <Slider {...settingsDetail} ref={sliderDetailRef}> {/* Assign ref */}
              {images.map((image, index) => (
                <div key={`detail-${index}`} className="project">
                  <img 
                    src={`/bar_photos/${image}`} 
                    alt={`Gallery image ${index + 1}`} 
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="project-strip max-w-5xl mx-auto px-4 mt-4"> {/* Added mt-4 for slight separation if needed, can be 0 */}
          <Slider {...settingsStrip} ref={sliderStripRef}> {/* Assign ref */}
            {images.map((image, index) => (
              <div key={`strip-${index}`} className="project p-2 cursor-pointer">
                <img 
                  src={`/bar_photos/${image}`} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-auto object-cover rounded shadow-md opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
