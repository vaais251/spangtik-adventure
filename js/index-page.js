// Index Page Specific Scripts
console.log('index-page.js: Script loaded');

// Main initialization function
function initIndexPage() {
    console.log('index-page.js: initIndexPage called');

    // 1. Handle Transparent Header on Home Page
    const header = document.querySelector('.header');
    if (header) {
        header.classList.add('transparent');
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.remove('transparent');
                header.classList.add('sticky');
            } else {
                header.classList.add('transparent');
                header.classList.remove('sticky');
            }
        });
    }

    // 2. Refresh AOS if present
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }

    // 3. Initialize Modern Hero Slider
    initModernHeroSlider();
}

// Global startCarousel function for backward compatibility and explicit calls
window.startCarousel = function () {
    console.log('index-page.js: startCarousel called via window');
    initModernHeroSlider();
};

// Modern Hero Slider Implementation
function initModernHeroSlider() {
    const heroSection = document.querySelector('.hero-modern');
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-indicators .indicator');
    const prevBtn = document.querySelector('.hero-nav-btn.prev');
    const nextBtn = document.querySelector('.hero-nav-btn.next');

    if (!heroSection || slides.length === 0) {
        console.warn('Hero Slider: Elements not found. Section:', !!heroSection, 'Slides:', slides.length);
        return;
    }

    // Prevent double initialization
    if (heroSection.dataset.initialized === 'true') {
        console.log('Hero Slider: Already initialized');
        return;
    }
    heroSection.dataset.initialized = 'true';

    console.log(`Hero Slider: Initializing ${slides.length} slides`);

    let currentSlide = 0;
    let slideInterval;
    const duration = 3000; // 3 seconds

    function showSlide(index) {
        // Handle wrap around
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        console.log(`Hero Slider: showing slide ${index + 1}`);

        // Remove active class from all
        slides.forEach(s => s.classList.remove('active'));
        indicators.forEach(i => i.classList.remove('active'));

        // Reset progress animations
        indicators.forEach(ind => {
            const progress = ind.querySelector('.indicator-progress');
            if (progress) {
                progress.style.animation = 'none';
                void progress.offsetWidth; // Trigger reflow
                progress.style.animation = null;
            }
        });

        // Apply active class
        slides[index].classList.add('active');
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }

        currentSlide = index;
    }

    function startAutoPlay() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, duration);
    }

    // Event Listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showSlide(currentSlide - 1);
            startAutoPlay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showSlide(currentSlide + 1);
            startAutoPlay();
        });
    }

    indicators.forEach((ind, i) => {
        ind.addEventListener('click', (e) => {
            e.preventDefault();
            showSlide(i);
            startAutoPlay();
        });
    });

    // Swipe Support
    let touchX = 0;
    heroSection.addEventListener('touchstart', e => {
        touchX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSection.addEventListener('touchend', e => {
        const diff = touchX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            showSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
            startAutoPlay();
        }
    }, { passive: true });

    // Keyboard
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') { showSlide(currentSlide - 1); startAutoPlay(); }
        if (e.key === 'ArrowRight') { showSlide(currentSlide + 1); startAutoPlay(); }
    });

    // Visibility
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) clearInterval(slideInterval);
        else startAutoPlay();
    });

    // Final Init
    showSlide(0);
    startAutoPlay();
}

// Kick off
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIndexPage);
} else {
    initIndexPage();
}
