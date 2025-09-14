// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const bars = navToggle.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    });
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
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

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroGrid = document.querySelector('.hero-grid');
    const heroParticles = document.querySelector('.hero-particles');
    
    if (heroGrid && heroParticles) {
        heroGrid.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroParticles.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add floating particles effect
function createParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#00ffff';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${3 + Math.random() * 4}s linear infinite`;
        particle.style.opacity = '0.6';
        
        particlesContainer.appendChild(particle);
    }
}

// Add floating animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});

// Add hover effects for cards
document.querySelectorAll('.feature-card, .prize-card, .sponsor-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Typing effect removed since we're now using logo image
    // const titleMain = document.querySelector('.title-main');
    // if (titleMain) {
    //     const originalText = titleMain.textContent;
    //     typeWriter(titleMain, originalText, 150);
    // }
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '3px';
    progressBar.style.background = 'linear-gradient(90deg, #00ffff, #ff00ff)';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.1s ease';
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', () => {
    createScrollProgress();
});

// Registration status indicator (since registration is closed)
function createRegistrationStatus() {
    const statusElement = document.createElement('div');
    statusElement.style.position = 'fixed';
    statusElement.style.top = '80px';
    statusElement.style.right = '20px';
    statusElement.style.background = 'rgba(255, 0, 0, 0.1)';
    statusElement.style.border = '1px solid rgba(255, 0, 0, 0.3)';
    statusElement.style.borderRadius = '10px';
    statusElement.style.padding = '15px';
    statusElement.style.color = '#ff4444';
    statusElement.style.fontSize = '14px';
    statusElement.style.fontWeight = '600';
    statusElement.style.zIndex = '1000';
    statusElement.style.backdropFilter = 'blur(10px)';
    statusElement.style.textAlign = 'center';
    
    statusElement.innerHTML = `
        <div style="font-size: 12px; margin-bottom: 5px;">Registration Status</div>
        <div style="font-size: 16px;">242 Teams Registered</div>
    `;
    
    document.body.appendChild(statusElement);
}

// Initialize registration status
document.addEventListener('DOMContentLoaded', () => {
    createRegistrationStatus();
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add cursor trail effect
function createCursorTrail() {
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.width = '20px';
    trail.style.height = '20px';
    trail.style.border = '2px solid rgba(0, 255, 255, 0.5)';
    trail.style.borderRadius = '50%';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9998';
    trail.style.transition = 'all 0.1s ease';
    
    document.body.appendChild(trail);
    
    document.addEventListener('mousemove', (e) => {
        trail.style.left = e.clientX - 10 + 'px';
        trail.style.top = e.clientY - 10 + 'px';
    });
}

// Initialize cursor trail
document.addEventListener('DOMContentLoaded', () => {
    createCursorTrail();
});

// Registration Closed Popup Functionality
function showRegistrationClosedPopup() {
    const popup = document.getElementById('registrationClosedPopup');
    if (popup) {
        // Check if popup was already dismissed in this session
        const dismissed = sessionStorage.getItem('registrationClosedPopupDismissed');
        if (!dismissed) {
            setTimeout(() => {
                popup.classList.add('show');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }, 1000); // Show popup after 1 second delay
        }
    }
}

function closeRegistrationClosedPopup() {
    const popup = document.getElementById('registrationClosedPopup');
    if (popup) {
        popup.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
        // Mark as dismissed for this session
        sessionStorage.setItem('registrationClosedPopupDismissed', 'true');
    }
}

// Close registration closed popup when clicking outside
document.addEventListener('click', (e) => {
    const popup = document.getElementById('registrationClosedPopup');
    if (e.target === popup) {
        closeRegistrationClosedPopup();
    }
});

// Close registration closed popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const popup = document.getElementById('registrationClosedPopup');
        if (popup && popup.classList.contains('show')) {
            closeRegistrationClosedPopup();
        }
    }
});

// Help Popup Functionality
function showHelpPopup() {
    const popup = document.getElementById('helpPopup');
    if (popup) {
        // Check if help popup was already dismissed in this session
        const dismissed = sessionStorage.getItem('helpPopupDismissed');
        if (!dismissed) {
            setTimeout(() => {
                popup.classList.add('show');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }, 300); // Show popup after short delay
        }
    }
}

function closeHelpPopup() {
    const popup = document.getElementById('helpPopup');
    if (popup) {
        popup.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
        // Mark as dismissed for this session
        sessionStorage.setItem('helpPopupDismissed', 'true');
    }
}

// Close help popup when clicking outside
document.addEventListener('click', (e) => {
    const helpPopup = document.getElementById('helpPopup');
    if (e.target === helpPopup) {
        closeHelpPopup();
    }
});

// Close help popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const helpPopup = document.getElementById('helpPopup');
        if (helpPopup && helpPopup.classList.contains('show')) {
            closeHelpPopup();
        }
    }
});

// Mobile-specific improvements
function handleMobileOptimizations() {
    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Improve touch scrolling
    document.body.style.webkitOverflowScrolling = 'touch';
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            // Recalculate viewport height for mobile browsers
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }, 100);
    });

    // Set initial viewport height
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navMenu && navToggle && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }
});

// Smooth scroll for mobile
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Gallery Slideshow Functionality
let slideIndex = 1;
let slideInterval;

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}

function changeSlide(n) {
    clearInterval(slideInterval);
    slideIndex += n;
    showSlides(slideIndex);
    startAutoSlide();
}

function currentSlide(n) {
    clearInterval(slideInterval);
    slideIndex = n;
    showSlides(slideIndex);
    startAutoSlide();
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 4000); // Change slide every 4 seconds
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Pause slideshow on hover
document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', stopAutoSlide);
        slideshowContainer.addEventListener('mouseleave', startAutoSlide);
    }
});

// Initialize mobile optimizations and popups
document.addEventListener('DOMContentLoaded', () => {
    showRegistrationClosedPopup();
    handleMobileOptimizations();
    showSlides(slideIndex);
    startAutoSlide();
});
