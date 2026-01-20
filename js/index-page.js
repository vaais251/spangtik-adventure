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
});

// Animations initialization function called from index.html
function initAnimations() {
    console.log('Initializing animations...');
    // Add any specific GSAP or other animations here
}

function startCarousel() {
    // Initialize Swiper for Hero
    if (typeof Swiper !== 'undefined') {
        window.heroSlider = new Swiper('.hero-slider', {
            loop: true,
            effect: 'fade',
            speed: 1000,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}
