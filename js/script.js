// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize AOS
AOS.init({
    once: true,
    mirror: false,
});

// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.getElementById('sticky-header');
    if (window.scrollY > 200) {
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
    }
});

// Typewriter Effect
const typeWriter = (element, speed = 120) => {
    // If a timer is already running for this element, clear it before starting a new one
    if (element.dataset.typewriterTimer) {
        clearInterval(parseInt(element.dataset.typewriterTimer));
    }

    const text = element.dataset.text;
    element.innerHTML = ''; // Clear content before starting
    element.style.visibility = 'visible';
    let i = 0;

    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            element.dataset.typewriterTimer = null; // Clear the timer ID
        }
    }, speed);

    element.dataset.typewriterTimer = timer.toString(); // Store the new timer ID
};

const typewriterElements = document.querySelectorAll('.typewriter');

const typewriterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const target = entry.target;
        // Ignore the main hero title, as it's handled separately
        if (target.id === 'hero-title') return;

        if (entry.isIntersecting) {
            typeWriter(target);
        } else {
            // Clear timer and reset text when out of view
            if (target.dataset.typewriterTimer) {
                clearInterval(parseInt(target.dataset.typewriterTimer));
                target.dataset.typewriterTimer = null;
            }
            target.innerHTML = '';
            target.style.visibility = 'hidden';
        }
    });
}, {
    threshold: 0.6
});

typewriterElements.forEach(element => {
    if (element.id !== 'hero-title') {
        element.style.visibility = 'hidden';
        typewriterObserver.observe(element);
    }
});

// --- For hero H1 animation on page load ---
document.addEventListener('DOMContentLoaded', () => {
    const heroH1 = document.getElementById('hero-title');
    if (heroH1) {
        // Start typing after a short delay for better effect
        setTimeout(() => typeWriter(heroH1, 80), 500);
    }
});

// Pause/Play Marquee on Hover
const marquee = document.querySelector('.marquee-content');

if (marquee) {
    marquee.addEventListener('mouseenter', () => {
        marquee.style.animationPlayState = 'paused';
    });

    marquee.addEventListener('mouseleave', () => {
        marquee.style.animationPlayState = 'running';
    });
}

// --- Reviews Marquee JS ---
(function() {
    const marquee = document.querySelector('.marquee');
    const content = document.querySelector('.marquee-content');
    if (!marquee || !content) return;

    // Дублируем отзывы, если их мало, чтобы лента была длиннее экрана
    function ensureEnoughContent() {
        const minWidth = marquee.offsetWidth * 2;
        while (content.scrollWidth < minWidth) {
            content.innerHTML += content.innerHTML;
        }
    }
    ensureEnoughContent();

    // Пауза при наведении (на всякий случай, если не работает только на CSS)
    marquee.addEventListener('mouseenter', () => {
        content.style.animationPlayState = 'paused';
    });
    marquee.addEventListener('mouseleave', () => {
        content.style.animationPlayState = 'running';
    });
})();