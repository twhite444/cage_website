#!/bin/bash

# Enhanced WebP creation script for maximum optimization
# Creates WebP and AVIF versions for modern browsers

echo "🚀 Creating next-gen image formats for maximum speed..."

# Create directories for different formats
mkdir -p public/bar_photos/webp
mkdir -p public/bar_photos/avif
mkdir -p public/bar_photos/thumbnails

# Check if required tools are installed
if ! command -v magick &> /dev/null; then
    echo "❌ ImageMagick is required but not installed."
    echo "Install it with: brew install imagemagick"
    exit 1
fi

# Function to create optimized versions
optimize_image() {
    local input_file="$1"
    local filename=$(basename "$input_file" .jpg)
    
    echo "🔄 Processing: $filename"
    
    # Create WebP version (even smaller than JPEG)
    magick "$input_file" -quality 85 -define webp:lossless=false "public/bar_photos/webp/${filename}.webp"
    
    # Create AVIF version (newest, smallest format)
    magick "$input_file" -quality 85 "public/bar_photos/avif/${filename}.avif" 2>/dev/null || echo "   ⚠️  AVIF not supported, skipping"
    
    # Create thumbnail versions (300px wide for carousel previews)
    magick "$input_file" -resize 300x300^ -gravity center -extent 300x300 -quality 85 "public/bar_photos/thumbnails/${filename}_thumb.jpg"
    magick "public/bar_photos/thumbnails/${filename}_thumb.jpg" -quality 85 "public/bar_photos/thumbnails/${filename}_thumb.webp"
    
    # Get file sizes for comparison
    original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
    webp_size=$(stat -f%z "public/bar_photos/webp/${filename}.webp" 2>/dev/null || stat -c%s "public/bar_photos/webp/${filename}.webp" 2>/dev/null)
    thumb_size=$(stat -f%z "public/bar_photos/thumbnails/${filename}_thumb.webp" 2>/dev/null || stat -c%s "public/bar_photos/thumbnails/${filename}_thumb.webp" 2>/dev/null)
    
    echo "   📊 Original: $(numfmt --to=iec $original_size) → WebP: $(numfmt --to=iec $webp_size) → Thumb: $(numfmt --to=iec $thumb_size)"
}

# Process all JPEG images
for image in public/bar_photos/*.jpg; do
    if [ -f "$image" ] && [[ ! "$image" == *"_thumb"* ]]; then
        optimize_image "$image"
    fi
done

echo ""
echo "✅ Image optimization complete!"
echo "📁 WebP images: public/bar_photos/webp/"
echo "📁 AVIF images: public/bar_photos/avif/"
echo "📁 Thumbnails: public/bar_photos/thumbnails/"