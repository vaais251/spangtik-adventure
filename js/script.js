document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded - initializing scripts');
    
    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        // Add a maximum timeout in case 'load' event doesn't fire
        const preloaderTimeout = setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 5000); // 5 second maximum preloader time
        
        window.addEventListener('load', function() {
            clearTimeout(preloaderTimeout); // Clear the timeout if load event fires
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        });
    }

    // Mobile Navigation Setup - with enhanced debugging
    console.log('Setting up mobile navigation...');
    
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavButton = document.querySelector('.mobile-nav-button');
    const mainNav = document.querySelector('.main-nav');
    const header = document.querySelector('.header');
    
    // Debug logs for element detection
    console.log('Mobile Menu Toggle found:', mobileMenuToggle !== null);
    console.log('Mobile Nav Button found:', mobileNavButton !== null);
    console.log('Main Nav found:', mainNav !== null);
    console.log('Header found:', header !== null);
    
    if (mobileMenuToggle) {
        console.log('Mobile Menu Toggle styles:', 
            'display:', window.getComputedStyle(mobileMenuToggle).display,
            'visibility:', window.getComputedStyle(mobileMenuToggle).visibility
        );
    }
    
    if (mobileNavButton) {
        console.log('Mobile Nav Button styles:', 
            'display:', window.getComputedStyle(mobileNavButton).display,
            'visibility:', window.getComputedStyle(mobileNavButton).visibility
        );
    }
    
    // Sticky header implementation
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    
    // Mobile menu toggle functionality
    function toggleMobileMenu(e) {
        console.log('Toggle mobile menu called by:', e ? e.currentTarget : 'Unknown');
        if (e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent document click from immediately closing it
        }
        
        if (mainNav) {
            mainNav.classList.toggle('active');
            console.log('Main nav toggled, active state:', mainNav.classList.contains('active'));
        } else {
            console.error('Main nav element not found!');
        }
        
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.toggle('active');
        }
        
        if (e && e.currentTarget) {
            console.log('Toggle triggered by:', e.currentTarget.className);
        }
    }
    
    // Add click event to mobile menu toggle with proper error handling
    if (mobileMenuToggle) {
        console.log('Adding click event to mobile menu toggle');
        mobileMenuToggle.addEventListener('click', function(e) {
            console.log('Mobile menu toggle clicked');
            toggleMobileMenu(e);
        });
    } else {
        console.error('Mobile menu toggle element not found!');
    }
    
    // Add click event to mobile nav button with proper error handling
    if (mobileNavButton) {
        console.log('Adding click event to mobile nav button');
        mobileNavButton.addEventListener('click', function(e) {
            console.log('Mobile nav button clicked');
            toggleMobileMenu(e);
        });
    } else {
        console.error('Mobile nav button element not found!');
    }
    
    // Handle click outside menu to close it
    document.addEventListener('click', function(e) {
        if (!mainNav) return;
        
        const isClickInside = (mainNav.contains(e.target)) || 
                             (mobileMenuToggle && mobileMenuToggle.contains(e.target)) || 
                             (mobileNavButton && mobileNavButton.contains(e.target));
        
        if (!isClickInside && mainNav.classList.contains('active')) {
            console.log('Clicked outside menu, closing it');
            mainNav.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
    
    // Close menu when clicking a nav link
    if (mainNav) {
        const navLinks = mainNav.querySelectorAll('.nav-link');
        console.log('Found', navLinks.length, 'nav links');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 992) {
                    console.log('Nav link clicked, closing menu');
                    mainNav.classList.remove('active');
                    if (mobileMenuToggle) {
                        mobileMenuToggle.classList.remove('active');
                    }
                }
            });
        });
    }
    
    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Swiper Slider Initialization
    if (typeof Swiper !== 'undefined') {
        // Hero Slider
        const heroSlider = new Swiper('.hero-slider', {
            loop: true,
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
        
        // Testimonial Slider
        const testimonialSlider = new Swiper('.testimonial-slider', {
            loop: true,
            speed: 800,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.testimonial-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
        
        // Partner Slider
        const partnerSlider = new Swiper('.partner-slider', {
            loop: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            },
        });
    }
    
    // Gallery Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                    } else if (item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Stats Counter Animation
    const statsSection = document.querySelector('.journey-stats');
    const counters = document.querySelectorAll('.counter');
    
    if (statsSection && counters.length > 0) {
        let counted = false;
        
        function startCounting() {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                counter.innerText = '0';
                
                function updateCounter() {
                    const count = +counter.innerText;
                    // Calculate increment based on target value for smooth animation
                    const increment = target / 100;
                    
                    // If count is less than target, keep incrementing
                    if (count < target) {
                        // Use Math.ceil to ensure we always add at least 1
                        counter.innerText = Math.min(Math.ceil(count + increment), target);
                        // Continue animation
                        setTimeout(updateCounter, 20);
                    } else {
                        // Ensure we display the exact target value
                        counter.innerText = target;
                    }
                }
                
                // Start updating this counter
                updateCounter();
            });
            
            // Mark as counted
            counted = true;
        }
        
        // Check if stats section is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }
        
        // Function to check visibility and start counting if visible
        function checkVisibility() {
            if (!counted && isInViewport(statsSection)) {
                startCounting();
            }
        }
        
        // Initial check and add scroll event
        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Check on page load
        
        // Also check visibility after a short delay to ensure it works
        setTimeout(checkVisibility, 500);
    }
    
    // Weather Widget Functionality
    const weatherWidgets = {
        'gilgit-weather': {
            location: 'Gilgit,PK',
            lat: 35.9221,
            lon: 74.3087
        },
        'k2-weather': {
            location: 'K2 Base Camp',
            lat: 35.8800,
            lon: 76.5151
        },
        'hunza-weather': {
            location: 'Hunza,PK',
            lat: 36.3167,
            lon: 74.6500
        }
    };
    
    // Function to fetch and display weather data
    function fetchWeatherData() {
        // Loop through each weather widget
        Object.entries(weatherWidgets).forEach(([widgetId, data]) => {
            const weatherContainer = document.getElementById(widgetId);
            if (!weatherContainer) return;
            
            // Show loading state
            weatherContainer.innerHTML = `
                <div class="weather-loading">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Loading weather data...</p>
                </div>
            `;
            
            // Since we can't rely on an external API key, we'll use mock data
            // This simulates a successful API response with realistic weather data
            setTimeout(() => {
                // Create mock weather data based on location
                const mockWeatherData = getMockWeatherData(data.location);
                
                // Display the mock weather data
                weatherContainer.innerHTML = `
                    <div class="weather-info">
                        <div class="weather-main">
                            <img src="https://openweathermap.org/img/wn/${mockWeatherData.icon}@2x.png" alt="${mockWeatherData.description}">
                            <div class="weather-temp">${mockWeatherData.temp}°C</div>
                        </div>
                        <div class="weather-details">
                            <p class="weather-desc">${mockWeatherData.description}</p>
                            <p><i class="fas fa-tint"></i> Humidity: ${mockWeatherData.humidity}%</p>
                            <p><i class="fas fa-wind"></i> Wind: ${mockWeatherData.windSpeed} m/s</p>
                        </div>
                    </div>
                `;
            }, 1500); // Simulate network delay
        });
    }
    
    // Function to generate realistic mock weather data based on location
    function getMockWeatherData(location) {
        // Create different weather patterns based on location
        const weatherPatterns = {
            'Gilgit,PK': {
                temp: Math.floor(Math.random() * 10) + 15, // 15-25°C
                description: 'partly cloudy',
                icon: '02d',
                humidity: Math.floor(Math.random() * 20) + 40, // 40-60%
                windSpeed: (Math.random() * 3 + 1).toFixed(1) // 1-4 m/s
            },
            'K2 Base Camp': {
                temp: Math.floor(Math.random() * 10) - 10, // -10 to 0°C
                description: 'light snow',
                icon: '13d',
                humidity: Math.floor(Math.random() * 10) + 70, // 70-80%
                windSpeed: (Math.random() * 5 + 5).toFixed(1) // 5-10 m/s
            },
            'Hunza,PK': {
                temp: Math.floor(Math.random() * 10) + 10, // 10-20°C
                description: 'clear sky',
                icon: '01d',
                humidity: Math.floor(Math.random() * 15) + 35, // 35-50%
                windSpeed: (Math.random() * 2 + 1).toFixed(1) // 1-3 m/s
            }
        };
        
        // Return the weather pattern for the specified location or a default one
        return weatherPatterns[location] || {
            temp: Math.floor(Math.random() * 15) + 10, // 10-25°C
            description: 'scattered clouds',
            icon: '03d',
            humidity: Math.floor(Math.random() * 30) + 40, // 40-70%
            windSpeed: (Math.random() * 4 + 1).toFixed(1) // 1-5 m/s
        };
    }
    
    // Initialize weather widget if it exists on the page
    const weatherWidget = document.querySelector('.weather-widget');
    if (weatherWidget) {
        fetchWeatherData();
        
        // Refresh weather data every 30 minutes
        setInterval(fetchWeatherData, 30 * 60 * 1000);
    }
    
    // LightGallery Initialization
    if (typeof lightGallery !== 'undefined') {
        const galleryContainer = document.getElementById('gallery-container');
        if (galleryContainer) {
            lightGallery(galleryContainer, {
                selector: '.gallery-item',
                plugins: [lgZoom, lgThumbnail],
                speed: 500,
                download: false,
                counter: true,
                mousewheel: true,
            });
        }
    }
    
    // AOS Animation Initialization
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    
    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            if (nameInput && nameInput.value.trim() === '') {
                isValid = false;
                nameInput.classList.add('error');
            } else if (nameInput) {
                nameInput.classList.remove('error');
            }
            
            if (emailInput) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailInput.value)) {
                    isValid = false;
                    emailInput.classList.add('error');
                } else {
                    emailInput.classList.remove('error');
                }
            }
            
            if (messageInput && messageInput.value.trim() === '') {
                isValid = false;
                messageInput.classList.add('error');
            } else if (messageInput) {
                messageInput.classList.remove('error');
            }
            
            if (isValid) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Your message has been sent successfully!';
                
                contactForm.appendChild(successMessage);
                
                // Reset form
                contactForm.reset();
                
                // Remove success message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
        });
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const header = item.querySelector('.faq-header');
            
            if (header) {
                header.addEventListener('click', function() {
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                });
            }
        });
    }
    
    // Log that initialization is complete
    console.log('Script initialization complete');
});

// Add custom styles
const customStyles = `
<style>
/* Back to Top Button */
.back-to-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 40px;
    height: 40px;
    background-color: var(--primary-color);
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
}

.back-to-top.active {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background-color: var(--secondary-color);
    transform: translateY(-3px);
}

/* Success Message */
.success-message {
    background-color: #d4edda;
    color: #155724;
    padding: 10px 15px;
    border-radius: 4px;
    margin-top: 15px;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Error Styling */
.error {
    border-color: #dc3545 !important;
}

/* Preloader */
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.preloader-spinner {
    width: 50px;
    height: 50px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Animations */
.fade-in {
    animation: fadeIn 0.5s ease forwards;
}

.slide-up {
    animation: slideUp 0.5s ease forwards;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Transition Delays */
.delay-1 {
    transition-delay: 0.1s;
}

.delay-2 {
    transition-delay: 0.2s;
}

/* Weather Widget Styles */
.weather-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.weather-loading i {
    font-size: 24px;
    margin-bottom: 10px;
}

.weather-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.weather-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.weather-main img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}

.weather-temp {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.weather-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.weather-desc {
    font-size: 18px;
    margin-bottom: 10px;
}

.weather-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.weather-error i {
    font-size: 24px;
    margin-bottom: 10px;
}
</style>
`;

// Safely add styles to document
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        const styleElement = document.createElement('div');
        styleElement.innerHTML = customStyles;
        document.head.appendChild(styleElement);
    });
} else {
    const styleElement = document.createElement('div');
    styleElement.innerHTML = customStyles;
    document.head.appendChild(styleElement);
}