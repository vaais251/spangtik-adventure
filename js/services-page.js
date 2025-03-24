// Services Page JavaScript - Spantik Adventure

// FAQ Section Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Toggle active class on the clicked item
            item.classList.toggle('active');
            
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
    
    // Service image hover effects enhancement
    const serviceImages = document.querySelectorAll('.service-image');
    
    serviceImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.classList.add('hover-active');
        });
        
        image.addEventListener('mouseleave', () => {
            image.classList.remove('hover-active');
        });
    });
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor click behavior
            e.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate header height for offset
                const headerHeight = document.querySelector('header') ? 
                    document.querySelector('header').offsetHeight : 0;
                
                // Scroll to the target with offset for header
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize comparison table row highlighting
    const comparisonRows = document.querySelectorAll('.comparison-table tr:not(:first-child)');
    
    comparisonRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.classList.add('highlight');
        });
        
        row.addEventListener('mouseleave', () => {
            row.classList.remove('highlight');
        });
    });
});
