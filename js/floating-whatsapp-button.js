// Create a floating WhatsApp button
(function() {
    // Function to create and append the button
    function createWhatsAppButton() {
        // Check if button already exists (prevents duplicates)
        if (document.getElementById('whatsapp-button')) return;
        
        // Create floating WhatsApp button
        const floatingWhatsAppButton = document.createElement('a');
        floatingWhatsAppButton.id = 'whatsapp-button';
        floatingWhatsAppButton.className = 'floating-whatsapp-button';
        floatingWhatsAppButton.setAttribute('href', 'https://wa.me/923129880411');
        floatingWhatsAppButton.setAttribute('title', 'Contact us on WhatsApp');
        floatingWhatsAppButton.setAttribute('target', '_blank');
        floatingWhatsAppButton.setAttribute('rel', 'noopener noreferrer');
        floatingWhatsAppButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
        
        // Add button to body
        document.body.appendChild(floatingWhatsAppButton);
        
        console.log('WhatsApp button added to page');
    }
    
    // Try to create button when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createWhatsAppButton);
    } else {
        createWhatsAppButton();
    }
    
    // Fallback: Create button after window loads (in case DOMContentLoaded already fired)
    window.addEventListener('load', createWhatsAppButton);
    
    // Extra safety: Try again after a short delay
    setTimeout(createWhatsAppButton, 1000);
})();
