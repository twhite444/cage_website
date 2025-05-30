import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  return (
    <section className="py-12 bg-darkPlum">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-10">
        <h2 className="section-title section-title-decorated section-title-centered text-5xl mb-8 text-goldTan">Gallery</h2>
        <div className="w-24 h-1 bg-gold rounded-full mx-auto"></div>
      </div>
      <div className="pic-ctn">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={`/bar_photos/${image}`} 
            alt={`Gallery image ${index + 1}`} 
            className="pic" 
            style={{ animationDelay: `${index * 2}s` }}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
