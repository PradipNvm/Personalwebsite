<!-- Quick Reference Guide for Customization -->

# Portfolio Customization Quick Reference

## 🎨 Colors

Edit in `styles.css` (lines 1-29):

```css
:root {
    --navy: #0a192f;              /* Main background */
    --light-navy: #112240;        /* Cards background */
    --lightest-navy: #233554;     /* Hover backgrounds */
    --slate: #8892b0;             /* Standard text */
    --light-slate: #a8b2d1;       /* Light text */
    --lightest-slate: #ccd6f6;    /* Headings */
    --white: #e6f1ff;             /* Bright text */
    --green: #64ffda;             /* ACCENT COLOR - change this! */
}
```

**Quick Color Changes:**
- Main accent → `--green`
- Background → `--navy`
- Text color → `--slate`

## 📝 Text Content

### Hero Section (Welcome)
Edit in `index.html` around line 165:
```html
<h1>Hi, my name is</h1>
<h2>Pradip Pokhrel.</h2>  ← Your name
<h3>I bring imagination to life in 3D.</h3>  ← Your tagline
<p>Your bio text here...</p>
```

### About Section
Edit in `index.html` around line 200:
```html
<p>Your about text...</p>
<ul class="skills-list">
    <li>Skill 1</li>
    <li>Skill 2</li>
    <!-- Add your skills -->
</ul>
```

### Experience Section
Edit in `index.html` around line 320:
```html
<button class="job-tab" data-target="job1">Company Name</button>
<div class="job-panel active" id="job1">
    <h3><span>Your Job Title</span> <span class="company">@ Company</span></h3>
    <p class="range">Time Period</p>
    <ul>
        <li>Responsibility 1</li>
        <li>Responsibility 2</li>
    </ul>
</div>
```

### Projects Section
Edit in `index.html` around line 380:
```html
<h3 class="project-title">Project Name</h3>
<div class="project-description">
    <p>Project description...</p>
</div>
<ul class="project-tech-list">
    <li>Technology 1</li>
    <li>Technology 2</li>
</ul>
```

### Contact Section
Edit in `index.html` around line 480:
```html
<a class="email-link" href="mailto:your-email@example.com">Say Hello</a>
```

## 🖼️ Images

### Profile Picture
1. Save as: `assets/profile.jpg`
2. Size: 300x300px
3. Update in `index.html` line 320:
```html
<img src="assets/profile.jpg" alt="Your Name" />
```

### Project Images
1. Save as: `assets/projects/project-name.jpg`
2. Size: 700x400px
3. Update in `index.html` projects section:
```html
<img src="assets/projects/project1.jpg" alt="Project Name" />
```

## 🔗 Links

### Social Links
Edit in `index.html`:
- Email: `href="mailto:your-email@gmail.com"`
- GitHub: `href="https://github.com/yourusername"`
- LinkedIn: `href="https://linkedin.com/in/yourprofile"`

### Resume
1. Save as: `resume.pdf` in root directory
2. Button already configured in `script.js`

### Project Links
Edit project cards to add:
```html
<a href="https://your-project-link.com">
    <svg>...</svg>
</a>
```

## 🎯 Fonts

Change in `styles.css` (lines 18-19):

```css
--font-sans: 'Your Font', -apple-system, system-ui, sans-serif;
--font-mono: 'Your Mono Font', monospace;
```

Popular choices:
- Sans: `Roboto`, `Inter`, `Poppins`
- Mono: `Fira Code`, `Courier New`, `Inconsolata`

## 📱 Sizing

### Responsive Breakpoints

In `styles.css`, edit media queries:
- Desktop: `1080px and above`
- Tablet: `768px to 1080px`
- Mobile: `480px to 768px`
- Small Mobile: `below 480px`

## ⚙️ Functionality

### Resume Button
Edit in `script.js` line 108:
```javascript
window.open('resume.pdf', '_blank');  // Change filename
```

### Email Link
Update email everywhere:
- HTML: `href="mailto:your-email@gmail.com"`
- script.js keeps same

### Job Tabs
Ensure `data-target` matches the panel `id`:
```html
<button class="job-tab" data-target="job1">Tab</button>
<div class="job-panel" id="job1">Content</div>
```

## 🔍 SEO Meta Tags

Edit in `index.html` (lines 5-8):
```html
<meta name="description" content="Your site description">
<meta name="keywords" content="your, keywords, here">
<meta name="author" content="Your Name">
```

## 📏 Spacing & Layout

### Container Width
In `styles.css` line 156:
```css
.container {
    max-width: 1600px;  /* Change page width */
    padding: 0 150px;   /* Change side padding */
}
```

### Section Padding
In `styles.css` line 266:
```css
section {
    padding: 100px 0;  /* Vertical space */
}
```

## 🎬 Animations

### Fade Duration
In `styles.css` line 885:
```css
animation: fadeIn 0.6s ease forwards;  /* Change 0.6s */
```

### Transition Speed
In `styles.css` line 28:
```css
--transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
```

## 🚀 Performance

### Image Optimization
Before adding images:
```bash
# Using ImageMagick
convert image.jpg -resize 700x400 -quality 85 small.jpg

# Or use online: tinypng.com
```

### Lazy Loading
Already implemented! Images load when needed.

## 🔐 SSL & HTTPS

When deploying:
1. Use Netlify/Vercel (SSL automatic)
2. Or use Let's Encrypt (free)
3. Always use HTTPS in production

## 📊 Analytics (Optional)

Add Google Analytics to `index.html` head:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

## 📋 Deployment Checklist

- [ ] Update all text content
- [ ] Add profile image (300x300px)
- [ ] Add project images (700x400px)
- [ ] Update project descriptions
- [ ] Add resume.pdf
- [ ] Update email links
- [ ] Update social links
- [ ] Test on mobile
- [ ] Test all links work
- [ ] Check images load
- [ ] Validate HTML (html5.validator.nu)
- [ ] Check SEO meta tags
- [ ] Deploy to hosting

## 🐛 Common Customizations

### Change navbar height
`styles.css` line 24-25:
```css
--nav-height: 100px;
--nav-scroll-height: 70px;
```

### Change accent color
`styles.css` line 15:
```css
--green: #64ffda;  /* Change this color code */
```

### Add more project cards
Copy the entire `<li class="project-card">` block

### Add more job experiences
Copy the entire `<div class="job-panel">` block

### Adjust hover effects
Search for `:hover` in `styles.css`

## 📚 Resources

- Colors: [Coolors.co](https://coolors.co)
- Fonts: [Google Fonts](https://fonts.google.com)
- Icons: Already included in HTML
- Animations: Built-in, customizable in CSS
- Images: [Unsplash](https://unsplash.com), [Pexels](https://pexels.com)

## ✅ Testing

```bash
# Test locally
python -m http.server 8000

# Then visit: http://localhost:8000

# Test responsiveness: F12 → Toggle Device Toolbar
```

## 🆘 Needs Help?

1. Check README.md for detailed docs
2. Check browser console (F12) for errors
3. Validate HTML: html5.validator.nu
4. Test on different browsers
5. Check file paths and spellings

---

**Start with these 3 things:**
1. Update hero section text
2. Add your profile image
3. Update about section

Then deploy and share! 🚀
