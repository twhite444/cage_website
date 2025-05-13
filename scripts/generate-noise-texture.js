/* This file creates a PNG version of the noise texture for better browser compatibility */
const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a canvas
const width = 300;
const height = 300;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Fill with very dark color
ctx.fillStyle = '#121212';
ctx.fillRect(0, 0, width, height);

// Add noise
for (let x = 0; x < width; x++) {
  for (let y = 0; y < height; y++) {
    if (Math.random() > 0.95) {
      const val = Math.floor(Math.random() * 30);
      ctx.fillStyle = `rgba(255, 255, 255, 0.0${val})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

// Save to file
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('public/textures/noise-dark.png', buffer);

console.log('Noise texture created successfully!');
