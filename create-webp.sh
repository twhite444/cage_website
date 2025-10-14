#!/bin/bash

# WebP conversion script for maximum compression
echo "Converting images to WebP format..."

# Create WebP versions of all compressed images
for image in public/bar_photos/*.jpg; do
    if [ -f "$image" ]; then
        filename=$(basename "$image" .jpg)
        webp_file="public/bar_photos/${filename}.webp"
        
        echo "Converting: $filename.jpg -> $filename.webp"
        
        # Convert to WebP with high quality but smaller size
        magick "$image" -quality 80 "$webp_file"
        
        # Compare sizes
        jpg_size=$(stat -f%z "$image" 2>/dev/null || stat -c%s "$image" 2>/dev/null)
        webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)
        savings=$((jpg_size - webp_size))
        percentage=$((savings * 100 / jpg_size))
        
        echo "  JPG: $(numfmt --to=iec $jpg_size)"
        echo "  WebP: $(numfmt --to=iec $webp_size)"
        echo "  Saved: $(numfmt --to=iec $savings) ($percentage%)"
        echo ""
    fi
done

echo "WebP conversion complete!"