/**
 * EmailJS Integration for Contact Forms
 * This script handles the submission of both the contact form and booking form
 * using EmailJS service.
 */

// Contact Form Submission Handler
document.addEventListener('DOMContentLoaded', function () {
    console.log('Contact forms script loaded');

    // Regular contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        console.log('Contact form found');
        contactForm.addEventListener('submit', function (event) {
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

            // Basic email validation
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Show loading indicator
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Prepare additional template parameters (helps with spam filtering)
            const date = new Date();
            const formattedDate = date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // Set form field values with improved naming to avoid spam triggers
            contactForm.querySelector('#name').setAttribute('name', 'from_name');
            contactForm.querySelector('#email').setAttribute('name', 'reply_to');
            contactForm.querySelector('#subject').setAttribute('name', 'subject');
            contactForm.querySelector('#message').setAttribute('name', 'message');

            // Add hidden fields for additional information
            addHiddenField(contactForm, 'website', 'Spantik Adventure');
            addHiddenField(contactForm, 'submission_date', formattedDate);
            addHiddenField(contactForm, 'form_type', 'Contact Inquiry');

            // Send email using EmailJS
            emailjs.sendForm('service_s6vhnum', 'template_o62bc1n', contactForm)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);

                    // Display success message
                    showNotification('Thank you! Your message has been sent successfully.', 'success');

                    // Reset form
                    contactForm.reset();
                    // Remove hidden fields
                    removeHiddenFields(contactForm);
                })
                .catch(function (error) {
                    console.error('EmailJS Error:', error);

                    // Display error message
                    showNotification('Oops! Something went wrong. Please try again later.', 'error');
                    // Remove hidden fields
                    removeHiddenFields(contactForm);
                })
                .finally(function () {
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
        bookingForm.addEventListener('submit', function (event) {
            event.preventDefault();
            console.log('Booking form submitted');

            // Basic validation
            const bookingEmail = bookingForm.querySelector('#bookingEmail').value;
            if (!isValidEmail(bookingEmail)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Show loading indicator
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;

            // Set proper field names for EmailJS template
            bookingForm.querySelector('#bookingName').setAttribute('name', 'from_name');
            bookingForm.querySelector('#bookingEmail').setAttribute('name', 'reply_to');
            bookingForm.querySelector('#bookingPhone').setAttribute('name', 'phone');
            bookingForm.querySelector('#adventureType').setAttribute('name', 'adventure_type');
            bookingForm.querySelector('#startDate').setAttribute('name', 'start_date');
            bookingForm.querySelector('#duration').setAttribute('name', 'duration');
            bookingForm.querySelector('#groupSize').setAttribute('name', 'group_size');
            bookingForm.querySelector('#accommodation').setAttribute('name', 'accommodation');
            bookingForm.querySelector('#specialRequirements').setAttribute('name', 'special_requirements');

            // Add hidden fields for additional information
            const date = new Date();
            const formattedDate = date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            addHiddenField(bookingForm, 'website', 'Spantik Adventure');
            addHiddenField(bookingForm, 'submission_date', formattedDate);
            addHiddenField(bookingForm, 'form_type', 'Adventure Booking Request');

            // Send email using EmailJS - use sendForm method instead of send
            emailjs.sendForm('service_s6vhnum', 'template_ofwamms', bookingForm)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);

                    // Display success message
                    showNotification('Booking request submitted successfully! We\'ll contact you within 24 hours.', 'success');

                    // Reset form
                    bookingForm.reset();
                    // Remove hidden fields
                    removeHiddenFields(bookingForm);
                })
                .catch(function (error) {
                    console.error('EmailJS Error:', error);

                    // Display error message
                    showNotification('Oops! Something went wrong with your booking request. Please try again later.', 'error');
                    // Remove hidden fields
                    removeHiddenFields(bookingForm);
                })
                .finally(function () {
                    // Restore button text
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    } else {
        console.warn('Booking form not found on page');
    }

    // Modal Inquiry form (mostly on index.html)
    const inquiryForm = document.getElementById('inquiry-form');
    if (inquiryForm) {
        console.log('Inquiry form found');
        inquiryForm.addEventListener('submit', function (event) {
            event.preventDefault();
            console.log('Inquiry form submitted');

            const email = inquiryForm.querySelector('#email').value;
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            const submitBtn = inquiryForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;

            // Map fields for template
            inquiryForm.querySelector('#name').setAttribute('name', 'from_name');
            inquiryForm.querySelector('#email').setAttribute('name', 'reply_to');
            inquiryForm.querySelector('#tour-interest').setAttribute('name', 'subject');

            // Generate a message string since inquiry form doesn't have a message box
            const tour = inquiryForm.querySelector('#tour-interest').value;
            const preference = inquiryForm.querySelector('#preference').value;
            const messageStr = `The user is interested in: ${tour}. Preference: ${preference}`;

            const date = new Date();
            const formattedDate = date.toLocaleDateString('en-US', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            });

            addHiddenField(inquiryForm, 'message', messageStr);
            addHiddenField(inquiryForm, 'submission_date', formattedDate);
            addHiddenField(inquiryForm, 'form_type', 'Quick Website Inquiry');

            emailjs.sendForm('service_s6vhnum', 'template_o62bc1n', inquiryForm)
                .then(function (response) {
                    showNotification('Inquiry sent successfully! We will get back to you soon.', 'success');
                    inquiryForm.reset();
                    // Close modal if it exists
                    const modal = document.getElementById('inquiry-modal');
                    if (modal) modal.style.display = 'none';
                })
                .catch(function (error) {
                    showNotification('Failed to send inquiry. Please try again.', 'error');
                })
                .finally(function () {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    removeHiddenFields(inquiryForm);
                });
        });
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
    closeBtn.addEventListener('click', function () {
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

/**
 * Add a hidden field to a form
 * @param {HTMLFormElement} form - The form element
 * @param {string} name - Field name
 * @param {string} value - Field value
 */
function addHiddenField(form, name, value) {
    const hiddenField = document.createElement('input');
    hiddenField.type = 'hidden';
    hiddenField.name = name;
    hiddenField.value = value;
    hiddenField.className = 'dynamic-hidden-field';
    form.appendChild(hiddenField);
}

/**
 * Remove all dynamically added hidden fields
 * @param {HTMLFormElement} form - The form element
 */
function removeHiddenFields(form) {
    const hiddenFields = form.querySelectorAll('.dynamic-hidden-field');
    hiddenFields.forEach(field => field.remove());
}

/**
 * Basic email validation
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
