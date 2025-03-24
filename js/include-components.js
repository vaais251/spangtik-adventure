// Function to include header and footer components in all pages
document.addEventListener('DOMContentLoaded', function() {
    // Include Header
    const headerContainer = document.createElement('div');
    headerContainer.id = 'header-container';
    
    // Fetch the header.html content
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header');
            }
            return response.text();
        })
        .then(data => {
            // Insert the header content at the beginning of the body
            headerContainer.innerHTML = data;
            document.body.insertBefore(headerContainer, document.body.firstChild);
            
            // Highlight the current page in the navigation
            highlightCurrentPage();
            
            // Initialize mobile menu functionality after header is loaded
            initializeMobileMenu();
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
    
    // Include Footer
    const footerContainer = document.createElement('div');
    footerContainer.id = 'footer-container';
    
    // Fetch the footer.html content
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load footer');
            }
            return response.text();
        })
        .then(data => {
            // Insert the footer content at the end of the body, before any scripts
            footerContainer.innerHTML = data;
            document.body.insertBefore(footerContainer, document.body.lastChild);
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
});

// Function to highlight the current page in the navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Default to index.html if no page is specified
    const currentUrl = currentPage || 'index.html';
    
    // Find the corresponding nav link
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === currentUrl) {
            link.classList.add('active');
        }
    });
}

// Function to initialize mobile menu functionality
function initializeMobileMenu() {
    console.log('Initializing mobile menu after header is loaded');
    
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavButton = document.querySelector('.mobile-nav-button');
    const mainNav = document.querySelector('.main-nav');
    
    // Debug logs for element detection
    console.log('Mobile Menu Toggle found:', mobileMenuToggle !== null);
    console.log('Mobile Nav Button found:', mobileNavButton !== null);
    console.log('Main Nav found:', mainNav !== null);
    
    // Add mobile navigation header
    if (mainNav) {
        // Create mobile nav header
        const mobileNavHeader = document.createElement('div');
        mobileNavHeader.className = 'mobile-nav-header';
        
        // Add title
        const mobileNavTitle = document.createElement('div');
        mobileNavTitle.className = 'mobile-nav-title';
        mobileNavTitle.textContent = 'Navigation';
        
        // Add close button
        const mobileNavClose = document.createElement('button');
        mobileNavClose.className = 'mobile-nav-close';
        mobileNavClose.innerHTML = '<i class="fas fa-times"></i>';
        mobileNavClose.addEventListener('click', function() {
            mainNav.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
        });
        
        // Append elements to header
        mobileNavHeader.appendChild(mobileNavTitle);
        mobileNavHeader.appendChild(mobileNavClose);
        
        // Add header to main nav
        mainNav.insertBefore(mobileNavHeader, mainNav.firstChild);
    }
    
    // Mobile menu toggle functionality
    function toggleMobileMenu(e) {
        console.log('Toggle mobile menu called by:', e ? e.currentTarget.className : 'Unknown');
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
    }
    
    // Add click event to mobile menu toggle
    if (mobileMenuToggle) {
        console.log('Adding click event to mobile menu toggle');
        mobileMenuToggle.addEventListener('click', function(e) {
            console.log('Mobile menu toggle clicked');
            toggleMobileMenu(e);
        });
    } else {
        console.error('Mobile menu toggle element not found!');
    }
    
    // Add click event to mobile nav button
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
}
