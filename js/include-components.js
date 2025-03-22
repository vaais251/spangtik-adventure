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
    
    // Remove 'active' class from all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add 'active' class to the current page's navigation link
    if (currentPage === '' || currentPage === 'index.html') {
        document.getElementById('nav-home').classList.add('active');
    } else if (currentPage === 'about.html') {
        document.getElementById('nav-about').classList.add('active');
    } else if (currentPage === 'services.html') {
        document.getElementById('nav-services').classList.add('active');
    } else if (currentPage === 'gallery.html') {
        document.getElementById('nav-gallery').classList.add('active');
    } else if (currentPage === 'contact.html') {
        document.getElementById('nav-contact').classList.add('active');
    }
}
