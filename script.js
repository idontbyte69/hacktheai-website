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

// Rankings Data and Functionality
const rankingsData = [
    { rank: 1, team: "BUBT_Dropouts", university: "Bangladesh University of Business & Technology", leader: "Mehrab Hossain Ope", score: 1251, percentage: 66, status: "finalist" },
    { rank: 2, team: "DU_Prometheus", university: "University of Dhaka", leader: "Fahim Shakil", score: 1209, percentage: 64, status: "finalist" },
    { rank: 3, team: "Bloom Filter", university: "Shahjalal University of Science & Technology", leader: "MD Nasiat Hasan Fahim", score: 1205, percentage: 63, status: "finalist" },
    { rank: 4, team: "OnlyG", university: "Shahjalal University of Science & Technology", leader: "Nayem Ahmed", score: 1203, percentage: 63, status: "finalist" },
    { rank: 5, team: "Team Equation", university: "Daffodil International University", leader: "Musabbir Hasan Ratul", score: 1200, percentage: 63, status: "finalist" },
    { rank: 6, team: "SUST_Prompt_Storm", university: "Shahjalal University of Science & Technology", leader: "Abhishek Dash", score: 1199, percentage: 63, status: "finalist" },
    { rank: 7, team: "DeltaCoders", university: "Shahjalal University of Science & Technology", leader: "Ajor Saha", score: 1198, percentage: 63, status: "finalist" },
    { rank: 8, team: "Vibe Coders", university: "University of Dhaka", leader: "Umme Kulsum Tumpa", score: 1196, percentage: 63, status: "finalist" },
    { rank: 9, team: "Team StackWhiz", university: "Shahjalal University of Science & Technology", leader: "Mustakim Billah", score: 1195, percentage: 63, status: "finalist" },
    { rank: 10, team: "ONTORPONTHIK", university: "Shahjalal University of Science & Technology", leader: "Unayes Ahmed Khan", score: 1193, percentage: 63, status: "finalist" },
    { rank: 11, team: "MindSynth", university: "Jahangirnagar University", leader: "Md. Yashrif Arifin Swoccho", score: 1190, percentage: 63, status: "finalist" },
    { rank: 12, team: "Team X", university: "Bangladesh University of Engineering and Technology", leader: "Saad Tahmid", score: 1184, percentage: 62, status: "finalist" },
    { rank: 13, team: "Akatsuki", university: "Rajshahi University of Engineering & Technology", leader: "Anirban Sarkar", score: 1182, percentage: 62, status: "finalist" },
    { rank: 14, team: "Not-a-Bug But-a-Feature", university: "Green University of Bangladesh", leader: "Fardows Alam Kayes", score: 1179, percentage: 62, status: "finalist" },
    { rank: 15, team: "AI Titans", university: "Daffodil International University", leader: "Md Wahid", score: 1152, percentage: 61, status: "finalist" },
    { rank: 16, team: "DU_Apricot", university: "University of Dhaka", leader: "MD. Abu Bakar Siddique", score: 1151, percentage: 61, status: "finalist" },
    { rank: 17, team: "Merge Conflict", university: "Daffodil International University", leader: "Abir Kolin", score: 1151, percentage: 61, status: "finalist" },
    { rank: 18, team: "Team Kamikaze", university: "BRAC University", leader: "Anit Paul", score: 1146, percentage: 60, status: "finalist" },
    { rank: 19, team: "Md. Tasnimur Rahman Shakir", university: "Green University of Bangladesh", leader: "Md. Tasnimur Rahman Shakir", score: 1143, percentage: 60, status: "finalist" },
    { rank: 20, team: "DU_Caffeine", university: "University of Dhaka", leader: "Abrar Eyasir", score: 1082, percentage: 0, status: "finalist" },
    { rank: 21, team: "Syntax Squad GUB", university: "Green University Of Bangladesh", leader: "Jawad Hossain Mahi", score: 1133, percentage: 60, status: "finalist" },
    { rank: 22, team: "Backpropagator", university: "Chittagong University of Engineering and Technology", leader: "Shahad Abir Akash", score: 1122, percentage: 59, status: "finalist" },
    { rank: 23, team: "Triangle", university: "Jahangirnagar University", leader: "Md. Shaon Khan", score: 1102, percentage: 58, status: "finalist" },
    { rank: 24, team: "Team Non-Grata", university: "Bangladesh University of Engineering and Technology", leader: "Arunavo Anirban Aikko", score: 1093, percentage: 58, status: "finalist" },
    { rank: 25, team: "Bayes-ically Lost", university: "Green University of Bangladesh", leader: "Al Arafat Uddin Koraishi", score: 1082, percentage: 62, status: "finalist" },
    { rank: 26, team: "Niloy Kumar Mondal", university: "Bangladesh University of Engineering and Technology", leader: "Niloy Kumar Mondal", score: 1089, percentage: 57, status: "finalist" },
    { rank: 27, team: "Team Bots", university: "Bangladesh University of Engineering and Technology", leader: "Md. Tanzeem Mahmud", score: 1077, percentage: 57, status: "finalist" },
    { rank: 28, team: "Horaizon", university: "Green University of Bangladesh", leader: "Md. Mehadi Hasan", score: 1076, percentage: 57, status: "finalist" },
    { rank: 29, team: "Bok.AI", university: "University of Rajshahi", leader: "Kazi Fardin Islam", score: 1072, percentage: 56, status: "finalist" },
    { rank: 30, team: "LateCrew", university: "Daffodil International University", leader: "Md. Mohimenul Islam", score: 1061, percentage: 56, status: "finalist" },
    { rank: 31, team: "TeamTTR", university: "Jagannath University", leader: "Tertho Ghosh", score: 1018, percentage: 54, status: "finalist" },
    { rank: 32, team: "DevOops", university: "Bangladesh University of Engineering and Technology", leader: "Mafruha Islam Aishi", score: 1012, percentage: 53, status: "finalist" },
    { rank: 33, team: "Define Coders", university: "Shahjalal University of Science & Technology", leader: "Nafi Ullah Shafin", score: 1010, percentage: 53, status: "finalist" },
    { rank: 34, team: "Iman", university: "Shahjalal University of Science & Technology", leader: "Md Abdullah Al Mahadi Apurbo", score: 1005, percentage: 53, status: "finalist" },
    { rank: 35, team: "Return_Din0s", university: "Green University of Bangladesh", leader: "Sabbir Hossain Osmani", score: 1003, percentage: 53, status: "finalist" },
    { rank: 36, team: "Packet Loss", university: "Mawlana Bhashani Science and Technology University", leader: "Nur Mahmud Ul Alam Tasin", score: 1001, percentage: 53, status: "finalist" },
    { rank: 37, team: "Threezy Peasy", university: "Green University of Bangladesh", leader: "Md Shajahan Apurba", score: 1001, percentage: 53, status: "finalist" },
    { rank: 38, team: "team_Namespace", university: "Rajshahi University of Engineering & Technology", leader: "Abir Chandra Das", score: 977, percentage: 51, status: "finalist" },
    { rank: 39, team: "Triple_A", university: "Bangladesh University of Engineering and Technology", leader: "Md. Abrar Jahin", score: 973, percentage: 51, status: "finalist" },
    { rank: 40, team: "BashBagan", university: "Rajshahi University of Engineering & Technology", leader: "Nahid Hasan", score: 967, percentage: 51, status: "finalist" },
    { rank: 41, team: "JUST_DOMinators", university: "Jashore University of Science and Technology", leader: "Tarin Prosad Ghosh", score: 962, percentage: 51, status: "finalist" },
    { rank: 42, team: "Team Hackeons", university: "Green University of Bangladesh", leader: "MD. Raiyan Ur Rahman Jiyon", score: 961, percentage: 51, status: "finalist" },
    { rank: 43, team: "DU_RapidFire", university: "University of Dhaka", leader: "Nafis shyan", score: 956, percentage: 50, status: "finalist" },
    { rank: 44, team: "Byte Builders", university: "American International University - Bangladesh", leader: "Suvo Saha", score: 952, percentage: 50, status: "finalist" },
    { rank: 45, team: "AIpocalypse", university: "Green University of Bangladesh", leader: "Md Roman Nihal", score: 950, percentage: 50, status: "finalist" },
    { rank: 46, team: "Team KSZ", university: "Jahangirnagar University", leader: "Zunaid Ali", score: 949, percentage: 50, status: "finalist" },
    { rank: 47, team: "RuntimeTerrors", university: "University of Dhaka", leader: "Shah Alam Abir", score: 929, percentage: 49, status: "finalist" },
    { rank: 48, team: "Pegasus", university: "BRAC University", leader: "ASHFAQ AHMAD SAAD", score: 918, percentage: 48, status: "finalist" },
    { rank: 49, team: "Green-coders", university: "Green University of Banhladesh", leader: "Md. Sabbir Hossain", score: 914, percentage: 48, status: "finalist" },
    { rank: 50, team: "Debugging Ducks", university: "Green University of Bangladesh", leader: "Md. Mahmudol Hasan", score: 913, percentage: 48, status: "finalist" },
    { rank: 51, team: "Ginger", university: "Rajshahi University of Engineering & Technology", leader: "Sajid Shahriar Islam", score: 884, percentage: 47, status: "eliminated" },
    { rank: 52, team: "Part Time Coders", university: "Shahjalal University of Science & Technology", leader: "Irfanul Huda", score: 880, percentage: 46, status: "eliminated" },
    { rank: 53, team: "Team_RAFSANTAK", university: "Jashore University of Science and Technology", leader: "Sajid Hasan Takbir", score: 877, percentage: 46, status: "eliminated" },
    { rank: 54, team: "Team Curse", university: "University of Asia Pacific", leader: "Nazmul Yeakin Iqra", score: 875, percentage: 46, status: "eliminated" },
    { rank: 55, team: "Backprop", university: "Rajshahi University of Engineering & Technology", leader: "Md Habibur Rahman", score: 867, percentage: 46, status: "eliminated" },
    { rank: 56, team: "AlgoTribe", university: "University of Rajshahi", leader: "Fouzia Naim Khan", score: 863, percentage: 45, status: "eliminated" },
    { rank: 57, team: "T1G", university: "Islamic University of Technology", leader: "Taki Tajwaruzzaman Khan", score: 534, percentage: 28, status: "eliminated" },
    { rank: 58, team: "A_Team_has_no_identity", university: "Bangladesh University of Engineering and Technology", leader: "Tahmidul Islam Omi", score: 836, percentage: 44, status: "eliminated" },
    { rank: 59, team: "Javamin_Crew", university: "Shahjalal University of Science & Technology", leader: "Abdullah Al Mahmud", score: 825, percentage: 43, status: "eliminated" },
    { rank: 60, team: "DUET_Cognitia", university: "Dhaka University of Engineering & Technology", leader: "Yeasir arafat dipu", score: 822, percentage: 43, status: "eliminated" },
    { rank: 61, team: "Kijani", university: "Daffodil International University", leader: "Azmain Fieque", score: 789, percentage: 42, status: "eliminated" },
    { rank: 62, team: "The Unknown Warriors", university: "Green University of Bangladesh", leader: "Bakul Ahmed", score: 779, percentage: 41, status: "eliminated" },
    { rank: 63, team: "Arekta_Team", university: "Bangladesh Army International University of Science and Technology", leader: "Md. Rashedin Khan Srejon", score: 765, percentage: 40, status: "eliminated" },
    { rank: 64, team: "NextGenThinkers", university: "Shahjalal University of Science & Technology", leader: "Md Robiul Islam Robin", score: 764, percentage: 40, status: "eliminated" },
    { rank: 65, team: "Green_Thunder", university: "Green University of Bangladesh", leader: "Jubaer Al Mamun", score: 734, percentage: 39, status: "eliminated" },
    { rank: 66, team: "LumenLeaf", university: "North South University", leader: "Mahbub Ahmed Turza", score: 729, percentage: 38, status: "eliminated" },
    { rank: 67, team: "Musafir", university: "Jagannath University", leader: "Farzana Akter", score: 724, percentage: 38, status: "eliminated" },
    { rank: 68, team: "Team_3Dots", university: "Green University Of Bangladesh", leader: "Md Abu Sufian", score: 719, percentage: 38, status: "eliminated" },
    { rank: 69, team: "More Than Rocket Science", university: "Green University of Bangladesh", leader: "MD FAHIM SARKER MRIDUL", score: 710, percentage: 37, status: "eliminated" },
    { rank: 70, team: "Comrade Sidekick", university: "BRAC University", leader: "Md Intekhabul Hafiz", score: 698, percentage: 37, status: "eliminated" },
    { rank: 71, team: "404nOtFound", university: "Bangladesh University of Professionals", leader: "Umme Hani Punam", score: 676, percentage: 36, status: "eliminated" },
    { rank: 72, team: "Tried_best", university: "Shahjalal University of Science & Technology", leader: "Md Khaled bin", score: 662, percentage: 35, status: "eliminated" },
    { rank: 73, team: "JUST_Stellar_Wind", university: "Jashore University of Science and Technology", leader: "Nazmus Sakib Sibly", score: 631, percentage: 33, status: "eliminated" },
    { rank: 74, team: "Team_Target", university: "Green University of Bangladesh", leader: "MD Emon Mia", score: 624, percentage: 33, status: "eliminated" },
    { rank: 75, team: "T1G", university: "Islamic University of Technology", leader: "Taki Tajwaruzzaman Khan", score: 534, percentage: 28, status: "eliminated" },
    { rank: 76, team: "TeamEggineer", university: "Shahjalal University of Science & Technology", leader: "Md. Nasir Uddin", score: 524, percentage: 28, status: "eliminated" },
    { rank: 77, team: "JnU_TrueNest", university: "Jagannath University", leader: "Fahmida Sweety", score: 497, percentage: 26, status: "eliminated" },
    { rank: 78, team: "Team Systalo", university: "Daffodil International University", leader: "Md Mobashir Hasan", score: 493, percentage: 26, status: "eliminated" },
    { rank: 79, team: "Spartans", university: "Rajshahi University of Engineering & Technology", leader: "Eazdan Mostafa Rafin", score: 477, percentage: 25, status: "eliminated" },
    { rank: 80, team: "New_Folder", university: "Bangladesh Army International University of Science and Technology", leader: "Abdullah al moneem", score: 460, percentage: 24, status: "eliminated" },
    { rank: 81, team: "CodePirates", university: "Green University of Bangladesh", leader: "Rahat Hossain Himel", score: 458, percentage: 24, status: "eliminated" },
    { rank: 82, team: "Rajshova", university: "University of Information Technology and Sciences", leader: "S M Ashaduzzaman", score: 405, percentage: 21, status: "eliminated" },
    { rank: 83, team: "Icarus", university: "Khulna University of Engineering & Technology", leader: "Asif Mahmud", score: 403, percentage: 21, status: "eliminated" },
    { rank: 84, team: "Epoch Warriors", university: "University Of Dhaka", leader: "Md. Ferdous Mondol", score: 384, percentage: 20, status: "eliminated" },
    { rank: 85, team: "Inesperado", university: "Noakhali Science and Technology University", leader: "Ayesha Mahmud", score: 342, percentage: 18, status: "eliminated" },
    { rank: 86, team: "Backbencher_JnU", university: "Jagannath University", leader: "Md. Samiul Islam", score: 333, percentage: 18, status: "eliminated" },
    { rank: 87, team: "HSTU_Vanguard", university: "Hajee Mohammad Danesh Science and Technology University", leader: "Md. Farhan Quadery", score: 324, percentage: 17, status: "eliminated" },
    { rank: 88, team: "nyctophile", university: "Begum Rokeya University", leader: "Sajedur Rahman", score: 197, percentage: 10, status: "eliminated" },
    { rank: 89, team: "Saracen", university: "Rajshahi University of Engineering & Technology", leader: "Minhajul Islam Zahin", score: 75, percentage: 4, status: "eliminated" }
];

let currentPage = 1;
const itemsPerPage = 10;
let filteredData = [...rankingsData];

// Initialize rankings functionality
function initializeRankings() {
    populateUniversityFilter();
    renderRankings();
    setupEventListeners();
}

// Populate university filter dropdown
function populateUniversityFilter() {
    const universityFilter = document.getElementById('university-filter');
    const universities = [...new Set(rankingsData.map(team => team.university))].sort();
    
    universities.forEach(university => {
        const option = document.createElement('option');
        option.value = university;
        option.textContent = university;
        universityFilter.appendChild(option);
    });
}

// Render rankings table
function renderRankings() {
    const tbody = document.getElementById('rankings-tbody');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = filteredData.slice(startIndex, endIndex);
    
    tbody.innerHTML = '';
    
    pageData.forEach(team => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><span class="rank-number">${team.rank}</span></td>
            <td><span class="team-name">${team.team}</span></td>
            <td><span class="university">${team.university}</span></td>
            <td><span class="team-leader">${team.leader}</span></td>
            <td><span class="status ${team.status}">${team.status === 'finalist' ? 'Finalist' : 'Eliminated'}</span></td>
        `;
        tbody.appendChild(row);
    });
    
    updatePagination();
}

// Update pagination controls
function updatePagination() {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

// Setup event listeners
function setupEventListeners() {
    // University filter
    document.getElementById('university-filter').addEventListener('change', (e) => {
        const selectedUniversity = e.target.value;
        if (selectedUniversity) {
            filteredData = rankingsData.filter(team => team.university === selectedUniversity);
        } else {
            filteredData = [...rankingsData];
        }
        currentPage = 1;
        renderRankings();
    });
    
    // Search filter
    document.getElementById('search-team').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm) {
            filteredData = rankingsData.filter(team => 
                team.team.toLowerCase().includes(searchTerm) ||
                team.leader.toLowerCase().includes(searchTerm) ||
                team.university.toLowerCase().includes(searchTerm)
            );
        } else {
            filteredData = [...rankingsData];
        }
        currentPage = 1;
        renderRankings();
    });
    
    // Pagination
    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderRankings();
        }
    });
    
    document.getElementById('next-page').addEventListener('click', () => {
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderRankings();
        }
    });
}

// Initialize mobile optimizations and popups
document.addEventListener('DOMContentLoaded', () => {
    showRegistrationClosedPopup();
    handleMobileOptimizations();
    showSlides(slideIndex);
    startAutoSlide();
    initializeRankings();
});
