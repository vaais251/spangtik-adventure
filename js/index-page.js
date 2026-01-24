// Index Page Specific Scripts
document.addEventListener('DOMContentLoaded', function () {
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

    // 2. Initialize AOS (already done in index.html, but safety check)
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
    
    // 3. Initialize Modern Hero Slider
    initModernHeroSlider();
});

// Modern Hero Slider - Custom Implementation
function initModernHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-indicators .indicator');
    const prevBtn = document.querySelector('.hero-nav-btn.prev');
    const nextBtn = document.querySelector('.hero-nav-btn.next');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 6000; // 6 seconds per slide
    
    // Function to show a specific slide
    function showSlide(index) {
        // Wrap around
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        
        // Remove active class from all slides and indicators
        slides.forEach(slide => {
            slide.classList.remove('active');
            // Reset animations
            const animatedElements = slide.querySelectorAll('[class*="animate-"]');
            animatedElements.forEach(el => {
                el.style.animation = 'none';
                el.offsetHeight; // Trigger reflow
                el.style.animation = null;
            });
        });
        
        indicators.forEach(ind => {
            ind.classList.remove('active');
            const progress = ind.querySelector('.indicator-progress');
            if (progress) {
                progress.style.animation = 'none';
                progress.offsetHeight;
                progress.style.animation = null;
            }
        });
        
        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        
        currentSlide = index;
    }
    
    // Next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Start auto-play
    function startAutoPlay() {
        stopAutoPlay();
        slideInterval = setInterval(nextSlide, slideDuration);
    }
    
    // Stop auto-play
    function stopAutoPlay() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    }
    
    // Event listeners for navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            startAutoPlay(); // Reset timer after manual navigation
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            startAutoPlay(); // Reset timer after manual navigation
        });
    }
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
            startAutoPlay(); // Reset timer after manual navigation
        });
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    const heroSection = document.querySelector('.hero-modern');
    
    if (heroSection) {
        heroSection.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        heroSection.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            startAutoPlay();
        }
    }
    
    // Pause on hover (optional - for desktop)
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopAutoPlay);
        heroSection.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            startAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            startAutoPlay();
        }
    });
    
    // Initialize first slide and start auto-play
    showSlide(0);
    startAutoPlay();
    
    // Pause when tab is not visible
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    });
}

// Animations initialization function called from index.html
function initAnimations() {
    console.log('Initializing animations...');
    // Add any specific GSAP or other animations here
}

function startCarousel() {
    // Legacy function - now handled by initModernHeroSlider
    // Keeping for backward compatibility
    console.log('Hero slider initialized with modern design');
}
