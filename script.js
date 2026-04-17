// L&T Abruzzi Wine Website JavaScript
// Modern ES6+ JavaScript for interactive functionality

document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation functionality
    initNavigation();
    
    // Portfolio filtering
    initPortfolioFiltering();
    
    // Form handling
    initFormHandling();
    
    // Smooth scrolling for internal links
    initSmoothScrolling();
    
    // Scroll animations
    initScrollAnimations();
    
    // Mobile menu toggle
    initMobileMenu();
    
    console.log('L&T Abruzzi Wine website initialized successfully');
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(248, 246, 240, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(114, 47, 55, 0.1)';
        } else {
            navbar.style.background = 'rgba(248, 246, 240, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Active navigation highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Portfolio filtering functionality
function initPortfolioFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const wineCards = document.querySelectorAll('.wine-card');
    
    if (filterButtons.length === 0 || wineCards.length === 0) {
        console.log('Portfolio filtering elements not found');
        return;
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter wine cards with animation
            wineCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Form handling
function initFormHandling() {
    // Trade form handling
    const tradeForm = document.getElementById('tradeForm');
    if (tradeForm) {
        tradeForm.addEventListener('submit', handleTradeFormSubmit);
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
}

// Handle trade form submission
function handleTradeFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formObject = {};
    
    for (let [key, value] of formData.entries()) {
        formObject[key] = value;
    }
    
    // Show success message
    showFormSuccess('trade');
    
    // In a real implementation, you would send this data to your backend
    console.log('Trade inquiry submitted:', formObject);
    
    // Reset form
    e.target.reset();
}

// Handle contact form submission
function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formObject = {};
    
    for (let [key, value] of formData.entries()) {
        formObject[key] = value;
    }
    
    // Show success message
    showFormSuccess('contact');
    
    // In a real implementation, you would send this data to your backend
    console.log('Contact form submitted:', formObject);
    
    // Reset form
    e.target.reset();
}

// Show form success message
function showFormSuccess(formType) {
    const message = document.createElement('div');
    message.className = 'form-success-message';
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #722f37, #8b1538);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 6px 25px rgba(114, 47, 55, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
    `;
    
    const messageText = formType === 'trade' 
        ? 'Thank you for your trade inquiry! We\'ll contact you within 24 hours.'
        : 'Thank you for your message! We\'ll respond to you soon.';
    
    message.textContent = messageText;
    
    document.body.appendChild(message);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 500);
    }, 5000);
}

// Smooth scrolling for internal links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    // Intersection Observer for fade-in animations
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
    
    // Elements to animate on scroll
    const animateElements = document.querySelectorAll('.vineyard-card, .wine-card, .stat-card, .benefit-item, .contact-card');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!navToggle || !navMenu) {
        return;
    }
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            bar.style.transform = navToggle.classList.contains('active') 
                ? `rotate(${index === 0 ? 45 : index === 2 ? -45 : 0}deg) ${index === 1 ? 'scaleX(0)' : ''}`
                : 'none';
        });
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = navMenu.querySelectorAll('.nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
            });
        });
    });
}

// Utility functions

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation
function validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Form validation helper
function validateForm(formData) {
    const errors = [];
    
    // Check required fields
    for (let [key, value] of formData.entries()) {
        if (!value.trim()) {
            errors.push(`${key} is required`);
        }
    }
    
    // Validate email if present
    const email = formData.get('email') || formData.get('contactEmail');
    if (email && !validateEmail(email)) {
        errors.push('Please enter a valid email address');
    }
    
    // Validate phone if present
    const phone = formData.get('phone');
    if (phone && !validatePhone(phone)) {
        errors.push('Please enter a valid phone number');
    }
    
    return errors;
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(300px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(300px);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: var(--wine-burgundy);
        font-weight: 500;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    /* Mobile menu styles */
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(248, 246, 240, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(114, 47, 55, 0.2);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-menu.active {
            display: flex;
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-link {
            padding: 1rem 0;
            font-size: 1.2rem;
            text-align: center;
            border-bottom: 1px solid rgba(114, 47, 55, 0.1);
        }
        
        .nav-link:last-child {
            border-bottom: none;
        }
        
        .nav-toggle.active .bar {
            transition: all 0.3s ease;
        }
        
        .nav-toggle.active .bar:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active .bar:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
document.head.appendChild(style);

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`L&T Abruzzi Wine website loaded in ${loadTime.toFixed(2)}ms`);
    });
}

// Service worker registration for PWA features (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}