// Main JavaScript - Portfolio Functionality

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Skip if href is just '#' or empty
        if (!href || href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Nav scroll effect
let lastScrollTop = 0;
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Job tabs functionality
const jobTabs = document.querySelectorAll('.job-tab');
const jobPanels = document.querySelectorAll('.job-panel');

jobTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and panels
        jobTabs.forEach(t => t.classList.remove('active'));
        jobPanels.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding panel
        const targetPanel = document.getElementById(tab.dataset.target);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});

// Scroll reveal animation using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Initialize counter for numbered headings
if (document.body) {
    document.body.style.counterReset = 'section';
}

// Resume button functionality - update this with your actual resume file path
document.querySelectorAll('.resume-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace 'resume.pdf' with your actual resume file path
        window.open('resume.pdf', '_blank');
    });
});

// Lazy load images (basic implementation)
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            // Image will load naturally once in viewport
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Escape key functionality if needed
    }
});

// Smooth fade-in on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Mobile menu toggle (if needed)
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const navContent = document.querySelector('.nav-content');
    
    // Add menu button for mobile
    if (window.innerWidth <= 768 && !document.querySelector('.menu-button')) {
        const menuButton = document.createElement('button');
        menuButton.classList.add('menu-button');
        menuButton.innerHTML = '☰';
        menuButton.style.cssText = `
            background: none;
            border: none;
            color: var(--green);
            font-size: 24px;
            cursor: pointer;
            display: none;
        `;
        
        navContent.appendChild(menuButton);
    }
};

// Call on load and resize
window.addEventListener('resize', createMobileMenu);
window.addEventListener('load', createMobileMenu);

// Track page load time (for analytics/performance)
const performanceData = {
    navigationStart: performance.timing.navigationStart,
    pageLoadTime: performance.timing.loadEventEnd - performance.timing.navigationStart
};

console.log(`Page loaded in ${performanceData.pageLoadTime}ms`);
