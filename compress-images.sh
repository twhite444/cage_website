#!/bin/bash

# Image compression script for The Cage website
# This script compresses all images in the bar_photos directory

echo "Starting image compression..."

# Create backup directory
mkdir -p public/bar_photos/originals

# Function to compress a single image
compress_image() {
    local input_file="$1"
    local filename=$(basename "$input_file")
    local backup_file="public/bar_photos/originals/$filename"
    
    echo "Processing: $filename"
    
    # Backup original
    cp "$input_file" "$backup_file"
    
    # Compress image (adjust quality as needed)
    # For web: 85% quality is usually good balance of size vs quality
    magick "$input_file" -quality 85 -resize 1920x1080\> "$input_file"
    
    # Get file sizes
    original_size=$(stat -f%z "$backup_file" 2>/dev/null || stat -c%s "$backup_file" 2>/dev/null)
    new_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
    
    # Calculate savings
    savings=$((original_size - new_size))
    percentage=$((savings * 100 / original_size))
    
    echo "  Original: $(numfmt --to=iec $original_size)"
    echo "  New: $(numfmt --to=iec $new_size)"
    echo "  Saved: $(numfmt --to=iec $savings) ($percentage%)"
    echo ""
}

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
    echo "ImageMagick is required but not installed."
    echo "Install it with:"
    echo "  macOS: brew install imagemagick"
    echo "  Ubuntu: sudo apt-get install imagemagick"
    exit 1
fi

# Process all images in bar_photos directory
for image in public/bar_photos/*.{jpg,jpeg,JPG,JPEG,png,PNG}; do
    if [ -f "$image" ]; then
        compress_image "$image"
    fi
done

echo "Image compression complete!"
echo "Originals backed up to: public/bar_photos/originals/"