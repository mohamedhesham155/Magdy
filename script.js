// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here (e.g., send data to a backend or service)
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Navigation background change on scroll & Mobile menu toggle
const nav = document.querySelector('nav');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });
}

// Handle projects section scroll indicator
const projectsGrid = document.querySelector('.projects-grid');
const scrollIndicator = document.querySelector('.scroll-indicator');

if (projectsGrid && scrollIndicator) {
    projectsGrid.addEventListener('scroll', () => {
        const scrollableWidth = projectsGrid.scrollWidth - projectsGrid.clientWidth;
        if (scrollableWidth > 0) {
            const scrollPercentage = (projectsGrid.scrollLeft / scrollableWidth) * 200; // Max 200% for the 33.33% width indicator
            scrollIndicator.style.setProperty('--scroll-percentage', `${Math.min(scrollPercentage, 200)}%`);
        } else {
            scrollIndicator.style.setProperty('--scroll-percentage', `0%`);
        }
    });
    // Initial check in case content is not scrollable
    const scrollableWidth = projectsGrid.scrollWidth - projectsGrid.clientWidth;
    if (scrollableWidth <= 0) {
        scrollIndicator.style.setProperty('--scroll-percentage', `0%`);
    }
}