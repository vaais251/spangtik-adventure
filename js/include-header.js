// Function to include the header.html file in all pages
document.addEventListener('DOMContentLoaded', function() {
    // Target the element where we want to insert the header
    const bodyElement = document.body;
    
    // Create a new div to hold the header content
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
            if (bodyElement.firstChild) {
                bodyElement.insertBefore(headerContainer, bodyElement.firstChild);
            } else {
                bodyElement.appendChild(headerContainer);
            }
            
            // Execute the scripts in the header content
            const scripts = headerContainer.getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                const script = document.createElement('script');
                script.text = scripts[i].text;
                document.head.appendChild(script).parentNode.removeChild(script);
            }
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
});