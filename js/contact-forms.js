/**
 * EmailJS Integration for Contact Forms
 * This script handles the submission of both the contact form and booking form
 * using EmailJS service.
 */

// Contact Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact forms script loaded');
    
    // Regular contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        console.log('Contact form found');
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Contact form submitted');
            
            // Get form values
            const name = contactForm.querySelector('#name').value;
            const email = contactForm.querySelector('#email').value;
            const subject = contactForm.querySelector('#subject').value;
            const message = contactForm.querySelector('#message').value;
            
            // Check if all required fields are filled
            if (!name || !email || !subject || !message) {
                showNotification('Please fill out all required fields.', 'error');
                return;
            }
            
            // Show loading indicator
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Prepare form data for EmailJS
            const templateParams = {
                from_name: name,
                reply_to: email,
                subject: subject,
                message: message
            };
            
            console.log('Sending email with params:', templateParams);
            
            // Send email using EmailJS
            emailjs.sendForm('service_gnw9foe', 'template_4ni90an', contactForm)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Display success message
                    showNotification('Thank you! Your message has been sent successfully.', 'success');
                    
                    // Reset form
                    contactForm.reset();
                })
                .catch(function(error) {
                    console.error('EmailJS Error:', error);
                    
                    // Display error message
                    showNotification('Oops! Something went wrong. Please try again later.', 'error');
                })
                .finally(function() {
                    // Restore button text
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    } else {
        console.warn('Contact form not found on page');
    }

    // Booking form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        console.log('Booking form found');
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Booking form submitted');
            
            // Show loading indicator
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;
            
            // Send email using EmailJS - use sendForm method instead of send
            emailjs.sendForm('service_gnw9foe', 'template_qmvvfjd', bookingForm)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Display success message
                    showNotification('Booking request submitted successfully! We\'ll contact you within 24 hours.', 'success');
                    
                    // Reset form
                    bookingForm.reset();
                })
                .catch(function(error) {
                    console.error('EmailJS Error:', error);
                    
                    // Display error message
                    showNotification('Oops! Something went wrong with your booking request. Please try again later.', 'error');
                })
                .finally(function() {
                    // Restore button text
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    } else {
        console.warn('Booking form not found on page');
    }
});

/**
 * Function to display notification messages
 * @param {string} message - The message to display
 * @param {string} type - The type of notification (success/error)
 */
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <p>${message}</p>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add notification to the page
    document.body.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Set up close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', function() {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}
