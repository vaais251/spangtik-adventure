// Create a floating install button
document.addEventListener('DOMContentLoaded', function() {
    // Create floating install button
    const floatingButton = document.createElement('a');
    floatingButton.id = 'install-app-button';
    floatingButton.className = 'floating-install-button';
    floatingButton.setAttribute('href', '#');
    floatingButton.setAttribute('title', 'Install App');
    floatingButton.innerHTML = '<i class="fas fa-download"></i>';
    
    // Add button to body
    document.body.appendChild(floatingButton);
    
    // Use existing app-installer.js for functionality
});
