// Custom Cursor Logic
const cursor = document.getElementById('cursor');
const cursorBlur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorBlur.style.left = e.clientX + 'px';
    cursorBlur.style.top = e.clientY + 'px';
});

// Scroll Effects for Navbar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Initialize animations for all sections and cards
document.querySelectorAll('section, .glass, .timeline-item').forEach(el => {
    el.classList.add('aos-init');
    el.setAttribute('data-aos', 'fade-up');
    revealObserver.observe(el);
});

// Smooth Scrolling for Links
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

// Typing Effect for Hero Subtitle
const typingText = document.querySelector('.typing-text');
const text = typingText.innerHTML;
typingText.innerHTML = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing effect after a small delay
setTimeout(typeWriter, 1000);

// mobile menu toggle (simple version)
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    // This is a simple toggle, could be expanded with a full mobile nav overlay
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = 'rgba(5, 6, 10, 0.95)';
    navLinks.style.padding = '2rem';
    navLinks.style.gap = '1.5rem';
});
