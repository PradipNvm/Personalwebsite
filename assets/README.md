# Assets Directory

This directory contains all media files for the portfolio website.

## Structure

```
assets/
├── profile.jpg          # Your profile picture (for About section)
└── projects/            # Project images
    ├── project1.jpg     # Featured Project 1
    ├── project2.jpg     # Featured Project 2
    ├── project3.jpg     # Featured Project 3
    └── ... more project images
```

## Image Guidelines

### Profile Picture
- **Size**: 300x300px (square)
- **Format**: JPG or PNG
- **File size**: Keep under 200KB
- **Quality**: High quality, professional photo
- **Location**: `assets/profile.jpg`

### Project Images
- **Size**: 700x400px (16:9 aspect ratio)
- **Format**: JPG or PNG
- **File size**: Keep under 300KB each
- **Quality**: Rendered or high-quality screenshots
- **Location**: `assets/projects/project-name.jpg`

## Image Optimization Tips

1. **Using ImageMagick**:
   ```bash
   # Resize and compress
   convert input.jpg -resize 700x400 -quality 85 output.jpg
   ```

2. **Using Online Tools**:
   - TinyPNG (tinypng.com)
   - ImageOptim (imageoptim.com)
   - Compressor.io (compressor.io)

3. **Using Node.js**:
   ```bash
   npm install -g imagemin-cli
   imagemin assets/*.jpg --out-dir=assets
   ```

## How to Add Images

1. Place your image file in the appropriate folder
2. Update the image path in `index.html`
3. Example:
   ```html
   <img src="assets/profile.jpg" alt="Pradip Pokhrel" />
   ```

## Current Placeholder Images

The portfolio currently uses placeholder images from Unsplash:
- Profile: `https://images.unsplash.com/photo-1633332755192-727a05c4013d`
- Projects: Various Unsplash images

**Replace these with your own images for your actual portfolio!**

## Recommended Image Sizes

| Element | Width | Height | Aspect | Format |
|---------|-------|--------|--------|--------|
| Profile Pic | 300 | 300 | 1:1 | JPG/PNG |
| Project Image | 700 | 400 | 16:9 | JPG/PNG |
| Thumbnail | 400 | 300 | 4:3 | JPG/PNG |

## Performance Best Practices

1. Always optimize images before uploading
2. Use appropriate formats (JPG for photos, PNG for graphics)
3. Keep file sizes under 300KB when possible
4. Use descriptive alt text for accessibility
5. Consider using WebP format for better compression

---

For more information, see the main README.md file.
