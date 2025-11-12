# Pradip Pokhrel - Personal Portfolio Website

A modern, responsive portfolio website for 3D Generalist artist Pradip Pokhrel. Built with HTML, CSS, and JavaScript with a clean, professional design featuring smooth scrolling, interactive components, and mobile responsiveness.

## Features

- ✨ **Modern Design**: Sleek dark theme with cyan accent colors
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- 🎯 **Smooth Scrolling**: Smooth navigation between sections
- 💼 **Interactive Tabs**: Dynamic job experience sections
- 🎨 **Animated Elements**: Fade-in animations and hover effects
- ⚡ **Performance Optimized**: Fast loading with efficient CSS and JavaScript
- 🔍 **SEO Friendly**: Proper meta tags and structured HTML
- ♿ **Accessible**: Semantic HTML and keyboard navigation support

## Project Structure

```
Personal-portfolio/
├── index.html          # Main HTML file
├── styles.css          # Separated stylesheet
├── script.js           # JavaScript functionality
├── resume.pdf          # Your resume (add your own)
├── assets/             # Images and media files
│   ├── profile.jpg     # Profile picture
│   └── projects/       # Project images
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime, etc.) for editing
- Git (optional, for version control)

### Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/PradipNvm/Personal-portfolio.git
   cd Personal-portfolio
   ```

2. **Open in browser**
   - Simply double-click `index.html` or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (with http-server package)
     npx http-server
     ```
   - Navigate to `http://localhost:8000`

## Customization

### Update Your Information

1. **Personal Details** - Edit `index.html`:
   - Update the hero section with your name and tagline
   - Modify the about section with your bio
   - Update skills list
   - Change company names and job descriptions
   - Update social links (email, GitHub, LinkedIn, etc.)

2. **Profile Image**
   - Replace the placeholder image in the About section
   - Add your image to the `assets/` folder
   - Update the image path in HTML:
     ```html
     <img src="assets/profile.jpg" alt="Your Name" />
     ```

3. **Projects**
   - Update project titles, descriptions, and technologies
   - Replace project images with your own screenshots/renders
   - Add project links to GitHub, demos, or portfolio pages

4. **Resume**
   - Add your actual resume as `resume.pdf`
   - Update the resume button to link to your file:
     ```javascript
     // In script.js, the resume button handler already expects resume.pdf
     ```

### Colors and Styling

Edit the CSS variables in `styles.css` (lines 1-29) to customize colors:

```css
:root {
    --navy: #0a192f;           /* Main background */
    --light-navy: #112240;     /* Secondary background */
    --green: #64ffda;          /* Accent color */
    --slate: #8892b0;          /* Text color */
    --lightest-slate: #ccd6f6; /* Light text */
    /* ... more variables ... */
}
```

### Fonts

The portfolio uses system fonts. To change fonts, update the `--font-sans` and `--font-mono` variables:

```css
--font-sans: 'Your Font', -apple-system, system-ui, sans-serif;
--font-mono: 'Your Mono Font', monospace;
```

## Features in Detail

### Navigation
- Fixed navigation bar with links to all sections
- Smooth scrolling to sections
- Nav shrinks on scroll for a compact view
- Active section highlighting

### Hero Section
- Full viewport height introduction
- Gradient text effects
- Call-to-action button

### About Section
- Bio information
- Skills grid layout
- Profile image with hover effects

### Experience Section
- Tabbed job history
- Company and role information
- Bullet points for responsibilities

### Work/Projects Section
- Featured projects with full descriptions
- "Other Noteworthy Projects" grid
- Technology tags for each project
- External link icons

### Contact Section
- Clear call-to-action
- Email link functionality
- Side email contact (desktop)

### Footer
- Credit and copyright information

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

## Performance Tips

1. **Optimize Images**: Compress project images before adding
   ```bash
   # Using imagemagick
   convert large.jpg -quality 85 -resize 1000x500 optimized.jpg
   ```

2. **Lazy Loading**: Images load as needed when scrolling into view

3. **Caching**: Serve with proper cache headers on your hosting

## Deployment

### Netlify (Recommended)
1. Push to GitHub
2. Connect repository to Netlify
3. Deploy automatically on push

### Vercel
1. Import project from GitHub
2. Deploy with one click
3. Custom domain support

### GitHub Pages
1. Push to `gh-pages` branch
2. Enable GitHub Pages in repository settings

### Traditional Hosting
1. Upload all files via FTP
2. Set `index.html` as default document
3. Ensure proper MIME types

## SEO Optimization

The site includes:
- Meta description
- Meta keywords
- Semantic HTML
- Proper heading hierarchy
- Image alt text
- Mobile viewport meta tag

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## JavaScript Features

### Dynamic Tab Switching
```javascript
// Job experience tabs
const jobTabs = document.querySelectorAll('.job-tab');
jobTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Handle tab switching
    });
});
```

### Smooth Scrolling
```javascript
// Scroll to sections smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
```

### Intersection Observer Animation
```javascript
// Animate elements as they appear
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
});
```

## Troubleshooting

### Images not loading
- Check file paths are relative and correct
- Ensure image files exist in the `assets/` folder
- Try with full absolute URL for testing

### Styles not applying
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Verify `styles.css` is in the same directory as `index.html`
- Check browser console for CSS errors

### JavaScript not working
- Ensure `script.js` is in the same directory
- Check browser console for JavaScript errors
- Verify JavaScript is enabled in browser

### Responsive issues
- Test with DevTools device emulation
- Check viewport meta tag in HTML
- Verify media queries in CSS

## Future Enhancements

- [ ] Add dark/light mode toggle
- [ ] Implement filtering for projects
- [ ] Add blog section
- [ ] Add testimonials/feedback
- [ ] Implement contact form with backend
- [ ] Add social media integration
- [ ] Add animations library (AOS, GSAP)
- [ ] Implement CMS for easier updates

## License

This project is open source and available under the MIT License. Feel free to use it as a template for your own portfolio.

## Credits

- Designed and built by Pradip Pokhrel
- Inspired by modern web design trends
- Uses semantic HTML5 and CSS3

## Contact

- Email: Pradippokhrel96@gmail.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]
- Portfolio: [Your Portfolio]

## Version History

### v1.0.0 (Current)
- Initial release
- All core features implemented
- Fully responsive design
- Mobile optimized
- Dark theme with cyan accents

---

**Last Updated**: November 12, 2025

For more information or to report issues, please visit the GitHub repository or contact the author directly.
