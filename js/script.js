document.addEventListener('DOMContentLoaded', function() {
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

    // Header and navigation variables - use different names to avoid conflicts
    let mainMenuToggle;
    let mainNavMenu;
    let headerElement;
    
    // Make sure they're initialized only once
    function initializeHeaderVariables() {
        if (!mainMenuToggle) {
            mainMenuToggle = document.querySelector('.mobile-toggle') || document.querySelector('.mobile-menu-toggle');
        }
        if (!mainNavMenu) {
            mainNavMenu = document.querySelector('.main-nav');
        }
        if (!headerElement) {
            headerElement = document.querySelector('.header');
        }
    }

    initializeHeaderVariables();
    
    // Sticky header implementation
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            headerElement.classList.add('sticky');
        } else {
            headerElement.classList.remove('sticky');
        }
    });
    
    // Mobile menu toggle
    if (mainMenuToggle && mainNavMenu) {
        // Handle click outside menu to close it
        document.addEventListener('click', function(e) {
            const isClickInside = mainNavMenu.contains(e.target) || mainMenuToggle.contains(e.target);
            
            if (!isClickInside && mainNavMenu.classList.contains('active')) {
                mainNavMenu.classList.remove('active');
                const icon = mainMenuToggle.querySelector('i');
                if (icon.classList.contains('fa-times')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Toggle menu on button click
        mainMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent document click from immediately closing it
            mainNavMenu.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking a nav link
        const navLinks = mainNavMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 992) {
                    mainNavMenu.classList.remove('active');
                    const icon = mainMenuToggle.querySelector('i');
                    if (icon.classList.contains('fa-times')) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
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
    
    // Improved Swiper Initialization
    let swiperCheckInterval = setInterval(function() {
        if (window.Swiper) {
            clearInterval(swiperCheckInterval);
            initializeSliders();
            console.log('Swiper loaded successfully');
        }
    }, 100);
    
    // Set a timeout to stop checking after 5 seconds
    setTimeout(function() {
        clearInterval(swiperCheckInterval);
        if (!window.Swiper) {
            console.error('Swiper failed to load');
            setupHeroSliderFallback();
        }
    }, 5000);
    
    // Initialize LightGallery with better error handling
    setTimeout(() => {
        if (typeof lightGallery !== 'undefined') {
            try {
                const galleryElements = document.querySelectorAll('.gallery-grid');
                if (galleryElements.length > 0) {
                    galleryElements.forEach(gallery => {
                        lightGallery(gallery, {
                            selector: '.gallery-link',
                            counter: false,
                            download: false,
                            backdropDuration: 400,
                            speed: 500,
                        });
                    });
                    console.log('LightGallery initialized successfully');
                }
            } catch (error) {
                console.error('Error initializing LightGallery:', error);
            }
        } else {
            console.warn('LightGallery not loaded. Gallery lightbox will not work.');
        }
    }, 1000);
    
    // Enhanced Form Validation
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Reset form on page load
        form.reset();
        
        // Clear form messages
        const formMessages = form.querySelectorAll('.form-message');
        formMessages.forEach(message => {
            message.style.display = 'none';
        });
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous error states
            const errorElements = form.querySelectorAll('.form-group.error');
            errorElements.forEach(element => {
                element.classList.remove('error');
            });
            
            // Hide previous messages
            formMessages.forEach(message => {
                message.style.display = 'none';
            });
            
            let hasError = false;
            
            // Check required fields
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    const formGroup = field.closest('.form-group');
                    if (formGroup) {
                        formGroup.classList.add('error');
                        const errorMessage = formGroup.querySelector('.error-message');
                        if (errorMessage) {
                            errorMessage.textContent = 'This field is required';
                        }
                    }
                    hasError = true;
                }
            });
            
            // Check email format
            const emailFields = form.querySelectorAll('input[type="email"]');
            emailFields.forEach(field => {
                if (field.value.trim() && !isValidEmail(field.value.trim())) {
                    const formGroup = field.closest('.form-group');
                    if (formGroup) {
                        formGroup.classList.add('error');
                        const errorMessage = formGroup.querySelector('.error-message');
                        if (errorMessage) {
                            errorMessage.textContent = 'Please enter a valid email address';
                        }
                    }
                    hasError = true;
                }
            });
            
            if (!hasError) {
                // Show success message
                const successMessage = form.querySelector('.form-message.success');
                if (successMessage) {
                    successMessage.style.display = 'flex';
                    form.reset();
                    
                    // Hide success message after delay
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 5000);
                } else {
                    // If no success message element, just show an alert
                    alert('Form submitted successfully!');
                    form.reset();
                }
                
                // Here you would normally submit the form data via AJAX
                console.log('Form submitted successfully');
            } else {
                // Show error message
                const errorMessage = form.querySelector('.form-message.error');
                if (errorMessage) {
                    errorMessage.style.display = 'flex';
                }
            }
        });
    });
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Gallery Filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-masonry .gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Cookie Consent
    const cookieConsent = document.getElementById('cookieConsent');
    const cookieAccept = document.getElementById('cookie-accept');
    const cookieDecline = document.getElementById('cookie-decline');
    const cookieLearnMore = document.getElementById('cookie-learn-more');

    // Check if user has already made a choice
    if (!localStorage.getItem('cookieChoice')) {
        // Show cookie banner after a short delay
        setTimeout(() => {
            if (cookieConsent) {
                cookieConsent.style.display = 'block';
            }
        }, 2000);
    }

    if (cookieAccept) {
        cookieAccept.addEventListener('click', function() {
            localStorage.setItem('cookieChoice', 'accepted');
            cookieConsent.style.display = 'none';
            // Here you could initialize analytics or other tracking code
        });
    }

    if (cookieDecline) {
        cookieDecline.addEventListener('click', function() {
            localStorage.setItem('cookieChoice', 'declined');
            cookieConsent.style.display = 'none';
        });
    }

    if (cookieLearnMore) {
        cookieLearnMore.addEventListener('click', function(e) {
            e.preventDefault();
            // You could show a modal with more information or redirect to a privacy policy page
            alert('You can read our full privacy policy and cookie information on our Privacy Policy page.');
        });
    }

    // Load weather data if the widget exists
    if (document.querySelector('.weather-widget')) {
        loadWeatherData();
    }

    // Virtual Tour
    const virtualTourBtns = document.querySelectorAll('.virtual-tour-btn');
    const virtualTourModal = document.getElementById('virtualTourModal');
    const closeModal = document.querySelector('.close-modal');
    const virtualTourTitle = document.getElementById('virtualTourTitle');
    const panoramaContainer = document.getElementById('panoramaContainer');

    // Virtual tour data
    const virtualTours = {
        'k2-base-camp': {
            title: 'K2 Base Camp Virtual Tour',
            image: 'images/virtual-tours/k2-base-camp-360.jpg',
            hotSpots: [
                {
                    pitch: -3.1,
                    yaw: 117.7,
                    type: "info",
                    text: "K2 Mountain (8,611m)"
                },
                {
                    pitch: -0.9,
                    yaw: 25.5,
                    type: "info",
                    text: "Base Camp Area"
                }
            ]
        },
        'hunza-valley': {
            title: 'Hunza Valley Virtual Tour',
            image: 'images/virtual-tours/hunza-valley-360.jpg',
            hotSpots: [
                {
                    pitch: -9.4,
                    yaw: 222.6,
                    type: "info",
                    text: "Rakaposhi Mountain (7,788m)"
                },
                {
                    pitch: -4.6,
                    yaw: 36.2,
                    type: "info",
                    text: "Baltit Fort"
                }
            ]
        }
    };

    // Initialize virtual tour buttons
    if (virtualTourBtns.length > 0) {
        virtualTourBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const tourId = this.getAttribute('data-tour');
                openVirtualTour(tourId);
            });
        });
    }

    // Close modal when clicking the X
    if (closeModal) {
        closeModal.addEventListener('click', closeVirtualTour);
    }

    // Close modal when clicking outside the content
    window.addEventListener('click', function(e) {
        if (e.target === virtualTourModal) {
            closeVirtualTour();
        }
    });

    function openVirtualTour(tourId) {
        if (!virtualTourModal || !virtualTours[tourId]) return;
        
        // Set the title
        if (virtualTourTitle) {
            virtualTourTitle.textContent = virtualTours[tourId].title;
        }
        
        // Display the modal
        virtualTourModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // For a real implementation, use actual 360 images
        // Here we're using a placeholder approach
        if (panoramaContainer) {
            if (typeof pannellum !== 'undefined') {
                // Initialize the panorama viewer
                pannellum.viewer('panoramaContainer', {
                    "type": "equirectangular",
                    "panorama": virtualTours[tourId].image,
                    "autoLoad": true,
                    "hotSpots": virtualTours[tourId].hotSpots
                });
            } else {
                // Fallback if pannellum isn't loaded
                panoramaContainer.innerHTML = `
                    <div style="display: flex; justify-content: center; align-items: center; height: 100%; flex-direction: column;">
                        <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: var(--primary-color); margin-bottom: 20px;"></i>
                        <p>Virtual tour could not be loaded. Please make sure you have a stable internet connection and try again.</p>
                    </div>
                `;
            }
        }
    }

    function closeVirtualTour() {
        if (!virtualTourModal) return;
        
        virtualTourModal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
        
        // Clear the panorama container
        if (panoramaContainer) {
            panoramaContainer.innerHTML = '';
        }
    }

    // Add fallback after a delay to ensure Swiper had time to load
    setTimeout(setupHeroSliderFallback, 2000);

    // Enhanced Language Selector Functionality
    const languageCurrent = document.querySelector('.language-current');
    let languageDropdownMenu = document.querySelector('.language-dropdown');
    
    if (languageCurrent && languageDropdownMenu) {
        // Toggle dropdown on click
        languageCurrent.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle active class for rotation animation
            this.classList.toggle('active');
            languageDropdownMenu.classList.toggle('show');
        });
        
        // Close dropdown when clicking elsewhere
        document.addEventListener('click', function() {
            languageDropdownMenu.classList.remove('show');
            if (languageCurrent) {
                languageCurrent.classList.remove('active');
            }
        });
        
        // Language selection
        const languageOptions = languageDropdownMenu.querySelectorAll('a');
        languageOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get selected language info
                const langImg = this.querySelector('img');
                const langSpan = this.querySelector('span');
                const langCode = this.getAttribute('data-lang').toUpperCase();
                
                // Update current language display
                const currentLangImg = languageCurrent.querySelector('img');
                const currentLangSpan = languageCurrent.querySelector('span');
                
                if (currentLangImg && langImg) {
                    currentLangImg.src = langImg.src;
                    currentLangImg.alt = langImg.alt;
                }
                
                if (currentLangSpan) {
                    currentLangSpan.textContent = langCode;
                }
                
                // Close dropdown
                languageDropdownMenu.classList.remove('show');
                languageCurrent.classList.remove('active');
                
                // Set a cookie to remember the language choice
                document.cookie = `preferred_language=${langCode}; path=/; max-age=31536000`; // 1 year
                
                // Log the language change (in production, you would redirect or reload the page)
                console.log(`Language changed to: ${langSpan.textContent} (${langCode})`);
                
                // Optional: Add visual feedback
                showLanguageChangeFeedback(langSpan.textContent);
            });
        });
    }
    
    // Show feedback when language is changed
    function showLanguageChangeFeedback(language) {
        // Create a notification element if it doesn't exist
        let notification = document.getElementById('language-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'language-notification';
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.right = '20px';
            notification.style.backgroundColor = 'var(--primary-color)';
            notification.style.color = '#fff';
            notification.style.padding = '10px 20px';
            notification.style.borderRadius = '4px';
            notification.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
            notification.style.zIndex = '9999';
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
            notification.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            document.body.appendChild(notification);
        }
        
        // Update content and show notification
        notification.textContent = `Language changed to: ${language}`;
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
        }, 3000);
    }

    // Improved LightGallery initialization
    function initializeLightGallery() {
        if (typeof lightGallery === 'undefined') {
            console.warn('LightGallery not loaded. Gallery lightbox will not work.');
            return;
        }
        
        try {
            const galleryElements = document.querySelectorAll('.gallery-grid, .gallery-masonry');
            if (galleryElements.length > 0) {
                galleryElements.forEach(gallery => {
                    lightGallery(gallery, {
                        selector: '.gallery-link',
                        counter: false,
                        download: false,
                        backdropDuration: 400,
                        speed: 500,
                        preload: 3,
                        mousewheel: true,
                        escKey: true,
                    });
                });
                console.log('LightGallery initialized successfully');
            }
        } catch (error) {
            console.error('Error initializing LightGallery:', error);
        }
    }

    // Call after DOM is loaded with a delay to ensure all resources are loaded
    setTimeout(initializeLightGallery, 1000);

    // Add image loading handler
    function handleImageLoading() {
        const images = document.querySelectorAll('.gallery-item img, .tour-image img, .testimonial-author img');
        
        images.forEach(img => {
            // Create placeholder if needed
            if (!img.closest('.image-placeholder')) {
                const container = img.parentElement;
                container.style.position = 'relative';
                
                const placeholder = document.createElement('div');
                placeholder.classList.add('image-placeholder');
                container.insertBefore(placeholder, img);
            }
            
            // Handle loading
            if (img.complete) {
                img.classList.add('loaded');
                const placeholder = img.previousElementSibling;
                if (placeholder && placeholder.classList.contains('image-placeholder')) {
                    placeholder.style.display = 'none';
                }
            } else {
                img.addEventListener('load', function() {
                    img.classList.add('loaded');
                    const placeholder = img.previousElementSibling;
                    if (placeholder && placeholder.classList.contains('image-placeholder')) {
                        placeholder.style.display = 'none';
                    }
                });
            }
        });
    }

    document.addEventListener('DOMContentLoaded', handleImageLoading);

    // Add scroll animations
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll(
            '.feature-card, .tour-card, .service-detail, .team-member, ' +
            '.gallery-item, .testimonial, .weather-location, .contact-box'
        );
        
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animatedElements.forEach(element => {
                element.classList.add('will-animate');
                observer.observe(element);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            animatedElements.forEach(element => {
                element.classList.add('animated');
            });
        }
    }

    // Wait for other resources to load
    setTimeout(initScrollAnimations, 1000);

    // Add this code to check image loading and apply loaded class
    function optimizeImages() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            // Check if already loaded
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                // Add loaded class when image loads
                img.addEventListener('load', function() {
                    this.classList.add('loaded');
                });
                
                // Handle error
                img.addEventListener('error', function() {
                    console.error('Failed to load image:', this.src);
                    // Replace with placeholder if loading fails
                    this.src = `https://via.placeholder.com/${this.width || 600}x${this.height || 400}/eeeeee/999999?text=Image+Not+Found`;
                });
            }
            
            // Add loading attribute for native lazy loading
            if ('loading' in HTMLImageElement.prototype) {
                img.loading = 'lazy';
            }
        });
    }

    // Call this function when DOM is loaded
    document.addEventListener('DOMContentLoaded', optimizeImages);

    // Check for broken images
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        console.log('Checking image:', img.src);
        
        img.addEventListener('error', function() {
            console.error('Failed to load image:', this.src);
            this.style.border = '2px solid red';
            this.style.padding = '10px';
            this.style.width = '100px';
            this.style.height = '100px';
            this.style.display = 'flex';
            this.style.justifyContent = 'center';
            this.style.alignItems = 'center';
            this.style.backgroundColor = '#ffdddd';
            this.style.fontSize = '12px';
            this.style.color = 'red';
            this.style.content = 'Image not found!';
            
            // Create a text overlay
            const errorText = document.createElement('div');
            errorText.textContent = 'Image not found: ' + this.src.split('/').pop();
            errorText.style.position = 'absolute';
            errorText.style.top = '0';
            errorText.style.left = '0';
            errorText.style.width = '100%';
            errorText.style.backgroundColor = 'rgba(255,0,0,0.7)';
            errorText.style.color = 'white';
            errorText.style.padding = '5px';
            errorText.style.fontSize = '12px';
            errorText.style.textAlign = 'center';
            
            const container = this.parentElement;
            container.style.position = 'relative';
            container.appendChild(errorText);
        });
    });

    // Initialize scroll animations for About page
    initAboutPageAnimations();

    // Initialize counters
    initCounters();

    // Initialize FAQ accordion
    initFaqAccordion();

    // Newsletter form handling
    initNewsletterForm();

    // Check if we're on the services page
    if (document.querySelector('.service-section')) {
        initServicePage();
    }

    // Set active nav link based on current page
    const currentPath = window.location.pathname;
    const filename = currentPath.substring(currentPath.lastIndexOf('/')+1);
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');
    const header = document.querySelector('.header');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        if (header && window.scrollY > 100) {
            header.classList.add('sticky');
        } else if (header) {
            header.classList.remove('sticky');
        }
    });
    
    // Language selector dropdown
    const selectedLanguage = document.querySelector('.selected-language');
    languageDropdownMenu = document.querySelector('.language-dropdown');
    
    if (selectedLanguage && languageDropdownMenu) {
        selectedLanguage.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdownMenu.classList.toggle('show');
        });
        
        // Close language dropdown when clicking elsewhere
        document.addEventListener('click', function() {
            languageDropdownMenu.classList.remove('show');
        });
        
        // Prevent closing when clicking on the dropdown itself
        languageDropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});

function initializeSliders() {
    // Hero Slider
    try {
        const heroSliderElement = document.querySelector('.hero-slider');
        if (heroSliderElement) {
            // First, ensure any existing swiper instance is destroyed
            if (heroSliderElement.swiper) {
                heroSliderElement.swiper.destroy(true, true);
            }
            
            // Create new Swiper with correct parameters
            const heroSlider = new Swiper('.hero-slider', {
                loop: true,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true // Enable crossfade for proper fade effect
                },
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
                on: {
                    init: function() {
                        console.log('Hero slider initialized successfully');
                    },
                    slideChangeTransitionStart: function() {
                        // Force correct slide visibility
                        const slides = document.querySelectorAll('.hero-slider .swiper-slide');
                        slides.forEach((slide) => {
                            if (!slide.classList.contains('swiper-slide-active')) {
                                slide.style.opacity = '0';
                            }
                        });
                    },
                    slideChangeTransitionEnd: function() {
                        // Ensure active slide is visible
                        const activeSlide = document.querySelector('.hero-slider .swiper-slide-active');
                        if (activeSlide) {
                            activeSlide.style.opacity = '1';
                        }
                    }
                }
            });
            
            // Force update after a short delay to ensure proper layout
            setTimeout(function() {
                heroSlider.update();
            }, 500);
        }
    } catch (error) {
        console.error('Error initializing hero slider:', error);
        setupHeroSliderFallback();
    }
    
    // Testimonials Slider
    try {
        const testimonialSliderElement = document.querySelector('.testimonials-slider');
        if (testimonialSliderElement) {
            const testimonialSlider = new Swiper('.testimonials-slider', {
                loop: true,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.testimonials-slider .swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                },
                on: {
                    init: function() {
                        console.log('Testimonial slider initialized successfully');
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error initializing testimonial slider:', error);
    }
}

// Weather Widget (Using OpenWeatherMap API)
function loadWeatherData() {
    console.log('Loading weather data...');
    const locations = [
        { id: 'gilgit-weather', name: 'Gilgit', lat: 35.9221, lon: 74.3087 },
        { id: 'k2-weather', name: 'K2 Base Camp', lat: 35.8800, lon: 76.5151 },
        { id: 'hunza-weather', name: 'Hunza Valley', lat: 36.3167, lon: 74.6500 }
    ];
    
    // Check if weather elements exist
    let weatherElementsExist = false;
    locations.forEach(location => {
        if (document.getElementById(location.id)) {
            weatherElementsExist = true;
        }
    });
    
    if (!weatherElementsExist) {
        console.log('No weather elements found on page');
        return;
    }
    
    // OpenWeatherMap API key - Replace with your own
    const apiKey = 'YOUR_API_KEY';
    
    locations.forEach(location => {
        const weatherElement = document.getElementById(location.id);
        if (!weatherElement) return;
        
        console.log(`Loading weather for ${location.name}`);
        
        // For demonstration purposes, we'll use mock data with a delay
        setTimeout(() => {
            try {
                displayWeather(location.id, getMockWeatherData(location.name));
                console.log(`Weather loaded for ${location.name}`);
            } catch (error) {
                console.error(`Error displaying weather for ${location.name}:`, error);
                displayWeatherError(location.id, 'Could not load weather data');
            }
        }, 1500);
    });
}

function displayWeather(elementId, data) {
    const weatherElement = document.getElementById(elementId);
    if (!weatherElement) return;
    
    const iconClass = getWeatherIconClass(data.weather[0].id);
    
    weatherElement.innerHTML = `
        <div class="weather-icon">
            <i class="${iconClass}"></i>
        </div>
        <div class="weather-temp">${Math.round(data.main.temp)}°C</div>
        <div class="weather-desc">${data.weather[0].description}</div>
        <div class="weather-details">
            <div class="weather-detail">
                <i class="fas fa-wind"></i>
                <span>${data.wind.speed} m/s</span>
            </div>
            <div class="weather-detail">
                <i class="fas fa-tint"></i>
                <span>${data.main.humidity}%</span>
            </div>
        </div>
    `;
}

function displayWeatherError(elementId, message) {
    const weatherElement = document.getElementById(elementId);
    if (!weatherElement) return;
    
    weatherElement.innerHTML = `
        <div class="weather-error">
            <i class="fas fa-exclamation-circle"></i>
            <p>${message}</p>
        </div>
    `;
}

function getWeatherIconClass(weatherId) {
    // Map OpenWeatherMap condition codes to Font Awesome icons
    if (weatherId >= 200 && weatherId < 300) return 'fas fa-bolt';
    if (weatherId >= 300 && weatherId < 400) return 'fas fa-cloud-rain';
    if (weatherId >= 500 && weatherId < 600) return 'fas fa-cloud-showers-heavy';
    if (weatherId >= 600 && weatherId < 700) return 'fas fa-snowflake';
    if (weatherId >= 700 && weatherId < 800) return 'fas fa-smog';
    if (weatherId === 800) return 'fas fa-sun';
    if (weatherId > 800) return 'fas fa-cloud';
    return 'fas fa-question';
}

// Mock weather data for demonstration
function getMockWeatherData(location) {
    const mockData = {
        'Gilgit': {
            main: { temp: 25, humidity: 40 },
            weather: [{ id: 800, description: 'Clear sky' }],
            wind: { speed: 3.6 }
        },
        'K2 Base Camp': {
            main: { temp: -5, humidity: 60 },
            weather: [{ id: 804, description: 'Overcast clouds' }],
            wind: { speed: 8.2 }
        },
        'Hunza Valley': {
            main: { temp: 18, humidity: 55 },
            weather: [{ id: 801, description: 'Few clouds' }],
            wind: { speed: 2.1 }
        }
    };
    
    return mockData[location];
}

// Add this function to your script.js file
function setupHeroSliderFallback() {
    if (document.querySelector('.hero-slider') && typeof Swiper === 'undefined') {
        console.log('Setting up fallback for hero slider');
        const heroSlider = document.querySelector('.hero-slider');
        const slides = heroSlider.querySelectorAll('.swiper-slide');
        
        // Hide all slides except the first one
        slides.forEach((slide, index) => {
            if (index === 0) {
                slide.style.display = 'flex';
            } else {
                slide.style.display = 'none';
            }
        });
        
        // Hide navigation and pagination
        const nav = heroSlider.querySelectorAll('.swiper-button-next, .swiper-button-prev, .swiper-pagination');
        nav.forEach(el => {
            el.style.display = 'none';
        });
    }
}

// Add this function to your script.js file
function checkSliderVisibility() {
    // Run this periodically to make sure slides display correctly
    const activeSlide = document.querySelector('.hero-slider .swiper-slide-active');
    const allSlides = document.querySelectorAll('.hero-slider .swiper-slide:not(.swiper-slide-active)');
    
    if (activeSlide) {
        activeSlide.style.opacity = '1';
        activeSlide.style.visibility = 'visible';
    }
    
    allSlides.forEach(slide => {
        slide.style.opacity = '0';
        slide.style.visibility = 'hidden';
    });
}

// Call this function periodically
setInterval(checkSliderVisibility, 1000);

// Add this function to your script.js file
function initAboutPageAnimations() {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll(
        '.about-intro-content, .about-intro-image, .mission-box, .vision-box, ' +
        '.value-card, .timeline-item, .team-member, .certification-item, ' +
        '.testimonial-highlight-quote, .testimonial-highlight-image'
    );
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        
        animatedElements.forEach(element => {
            element.classList.add('will-animate');
            observer.observe(element);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        animatedElements.forEach(element => {
            element.classList.add('animated');
        });
    }
}

// Add this to your script.js file for counter animation
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    if (!counters.length) return;
    
    const options = {
        threshold: 0.8
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                let count = 0;
                const speed = Math.max(10, target / 200); // Adjust speed based on target value
                
                const updateCount = () => {
                    if (count < target) {
                        count += Math.ceil(target / (1000 / speed));
                        if (count > target) count = target;
                        counter.innerText = count;
                        requestAnimationFrame(updateCount);
                    }
                };
                
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, options);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Add this function to initialize the FAQ accordion
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// Newsletter form handling
function initNewsletterForm() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        const messageDiv = form.nextElementSibling || form.parentElement.querySelector('.newsletter-message');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = form.querySelector('input[type="email"]').value;
            
            if (isValidEmail(email)) {
                // Success
                if (messageDiv) {
                    messageDiv.innerHTML = '<div class="alert alert-success">Thank you for subscribing!</div>';
                    messageDiv.style.display = 'block';
                }
                form.reset();
                
                // Hide message after 3 seconds
                setTimeout(() => {
                    if (messageDiv) {
                        messageDiv.style.display = 'none';
                    }
                }, 3000);
            } else {
                // Error
                if (messageDiv) {
                    messageDiv.innerHTML = '<div class="alert alert-danger">Please enter a valid email.</div>';
                    messageDiv.style.display = 'block';
                }
            }
        });
    });
}

// Service Page JavaScript Functions

// Initialize service page interactions
function initServicePage() {
    // Smooth scroll to service sections
    smoothScrollToServices();
    
    // Initialize FAQ accordion
    initFaqAccordion();
    
    // Add animation to service features
    animateServiceFeatures();
}

// Smooth scroll to service sections when clicking on nav links
function smoothScrollToServices() {
    const serviceLinks = document.querySelectorAll('a[href^="#"]');
    
    serviceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only process links that point to sections on this page
            if(this.getAttribute('href').startsWith('#') && document.querySelector(this.getAttribute('href'))) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                const headerOffset = 100; // Adjust for fixed header if needed
                
                if (targetElement) {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Animate service features on scroll
function animateServiceFeatures() {
    const features = document.querySelectorAll('.feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    features.forEach(feature => {
        feature.classList.add('will-animate');
        observer.observe(feature);
    });
}

// Add this style for feature animation
document.head.insertAdjacentHTML('beforeend', `
<style>
.feature.will-animate {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}
.feature.animated {
    opacity: 1;
    transform: translateY(0);
}
.feature:nth-child(2).will-animate {
    transition-delay: 0.2s;
}
</style>
`); 