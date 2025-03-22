# Spantik Adventure - Tourism Website Documentation

## Project Overview

This documentation provides a comprehensive guide to the Spantik Adventure tourism website, a professional website for a tourism company based in Gilgit Baltistan, Northern Pakistan. The website showcases trekking, expedition, and tour services with a modern, responsive design optimized for all devices.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Design Elements](#design-elements)
3. [Pages Overview](#pages-overview)
4. [Components](#components)
5. [CSS Structure](#css-structure)
6. [JavaScript Functionality](#javascript-functionality)
7. [External Libraries](#external-libraries)
8. [Image Guidelines](#image-guidelines)
9. [Maintenance](#maintenance)

## Project Structure

```
root/
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services/Tours page
├── gallery.html            # Photo gallery
├── contact.html            # Contact page
├── css/
│   ├── styles.css          # Main stylesheet
│   ├── header-footer.css    # Header and footer styles
│   ├── additional-styles.css # Additional styling
│   └── responsive.css       # Responsive design rules
├── js/
│   └── script.js           # Main JavaScript file
├── images/
│   ├── backgrounds/        # Background images
│   ├── favicon/            # Favicon files
│   ├── flags/              # Country flags
│   ├── gallery/            # Gallery images
│   ├── hero/               # Hero section images
│   ├── logo/               # Logo files
│   ├── services/           # Service-related images
│   ├── team/               # Team member photos
│   ├── testimonials/       # Testimonial author images
│   └── tours/              # Tour-specific images
└── project-documentation.md # This documentation file
```

## Design Elements

### Color Scheme

The website uses a carefully selected color palette defined as CSS variables:

```css
:root {
    /* Color Variables */
    --primary-color: #2c3e50;     /* Deep blue */
    --secondary-color: #34495e;    /* Slate blue */
    --accent-color: #e67e22;       /* Orange */
    --background-color: #F5F5F5;   /* Light gray */
    --text-color: #333;            /* Dark gray */
    --light-text: #FFFFFF;         /* White */
    --dark-text: #1A1A1A;          /* Almost black */
    --border-color: #DDDDDD;       /* Light gray border */
    --light-color: #f8f9fa;        /* Very light gray */
    --dark-color: #1a252f;         /* Very dark blue */
    --success-color: #2ecc71;      /* Green */
    --error-color: #e74c3c;        /* Red */
    --gray-color: #6c757d;         /* Medium gray */
}
```

### Typography

The website uses Google Fonts with a combination of:

- **Montserrat**: For headings (font-weight: 400, 500, 600, 700)
- **Open Sans**: For body text (font-weight: 400, 500)

### Spacing

Consistent spacing is used throughout the site:

```css
:root {
    /* Spacing */
    --section-spacing: 80px;
    --element-spacing: 20px;
}
```

## Pages Overview

### Homepage (index.html)

The homepage features:

1. **Hero Section**: A full-screen slider showcasing stunning landscapes with call-to-action buttons
2. **Features Section**: Highlighting key services with icons
3. **About Preview**: Brief company introduction with a team photo
4. **Popular Tours**: Showcasing featured tour packages
5. **Upcoming Tour Dates**: Calendar of scheduled expeditions
6. **Gallery Preview**: Sample of adventure photos
7. **Testimonials**: Client reviews
8. **Call to Action**: Final conversion section

### About Page (about.html)

Includes:

1. **Company History**: Timeline of company milestones
2. **Mission & Values**: Company philosophy
3. **Team Section**: Profiles of guides and staff
4. **Certifications**: Safety and professional certifications
5. **FAQ Section**: Common questions and answers

### Services Page (services.html)

Features:

1. **Service Categories**: Different types of tours and treks
2. **Detailed Tour Listings**: Comprehensive information about each tour
3. **Pricing Tables**: Cost breakdown for different packages
4. **Booking Information**: How to reserve tours
5. **Equipment Lists**: Required gear for different expeditions

### Gallery Page (gallery.html)

Includes:

1. **Filtered Gallery**: Categories for different types of photos
2. **Lightbox Functionality**: Expandable images
3. **Location Tags**: Where each photo was taken

### Contact Page (contact.html)

Features:

1. **Contact Form**: For inquiries and bookings
2. **Map**: Office location
3. **Contact Information**: Phone, email, address
4. **Social Media Links**: Connections to social platforms
5. **Office Hours**: When staff is available

## Components

### Header

The header is fixed at the top and includes:

- Logo
- Navigation menu
- Language selector
- Mobile menu toggle for smaller screens

```html
<header class="header">
    <div class="container">
        <div class="header-wrapper">
            <a href="index.html" class="logo">
                <img src="images/logo/logo.png" alt="Spantik Adventure">
            </a>
            <nav class="main-nav">
                <!-- Navigation items -->
            </nav>
            <div class="header-right">
                <!-- Language selector -->
                <div class="mobile-menu-toggle">
                    <!-- Mobile menu button -->
                </div>
            </div>
        </div>
    </div>
</header>
```

### Hero Slider

The hero section uses Swiper.js for a responsive, touch-enabled slider:

```html
<section class="hero">
    <div class="hero-slider swiper">
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide" style="background-image: url('images/hero/hero-1.jpg');">
                <div class="hero-content">
                    <!-- Slide content -->
                </div>
            </div>
            <!-- More slides -->
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</section>
```

### Tour Cards

Consistent card design for tour packages:

```html
<div class="tour-card">
    <div class="tour-image">
        <img src="images/tours/tour-image.jpg" alt="Tour Name">
        <div class="tour-tag">Popular</div>
    </div>
    <div class="tour-content">
        <h3>Tour Name</h3>
        <div class="tour-meta">
            <!-- Tour details -->
        </div>
        <p>Tour description</p>
        <div class="tour-features">
            <!-- Features -->
        </div>
        <div class="tour-info">
            <div class="tour-price"><span>From</span> $Price</div>
            <a href="services.html" class="btn btn-outline">View Details</a>
        </div>
    </div>
</div>
```

### Testimonial Cards

Testimonial display with author information:

```html
<div class="testimonial">
    <div class="testimonial-content">
        <p>Testimonial text</p>
    </div>
    <div class="testimonial-author">
        <img src="images/testimonials/author.jpg" alt="Author Name">
        <div class="author-info">
            <h4>Author Name</h4>
            <p>Location</p>
        </div>
    </div>
</div>
```

### Footer

Multi-column footer with contact information, quick links, and newsletter signup:

```html
<footer class="footer">
    <div class="container">
        <div class="footer-wrapper">
            <!-- Company info -->
            <!-- Quick links -->
            <!-- Contact info -->
            <!-- Newsletter signup -->
        </div>
        <div class="footer-bottom">
            <!-- Copyright -->
            <!-- Social media -->
        </div>
    </div>
</footer>
```

## CSS Structure

### styles.css

Contains the main styling for the website, including:

- Base elements (typography, containers, buttons)
- Section styling (hero, features, tours, etc.)
- Component styling (cards, forms, etc.)

### header-footer.css

Dedicated styling for the header and footer components, including:

- Header layout and navigation
- Mobile menu
- Footer columns and newsletter

### additional-styles.css

Contains supplementary styles for:

- Animations and transitions
- Icon styling
- Enhanced UI elements
- Special effects

### responsive.css

Handles all responsive design breakpoints:

```css
/* Tablets */
@media (max-width: 992px) {
    /* Tablet-specific styles */
}

/* Mobile Landscape */
@media (max-width: 768px) {
    /* Mobile landscape styles */
}

/* Mobile Portrait */
@media (max-width: 576px) {
    /* Mobile portrait styles */
}
```

## JavaScript Functionality

### script.js

The main JavaScript file handles:

1. **Slider Initialization**:
   - Hero slider
   - Testimonial slider
   - Gallery slider

2. **Navigation**:
   - Mobile menu toggle
   - Smooth scrolling
   - Active link highlighting

3. **Form Handling**:
   - Form validation
   - Form submission
   - Success/error messages

4. **UI Enhancements**:
   - Sticky header on scroll
   - Animations on scroll
   - Lightbox for gallery
   - FAQ accordion

## External Libraries

The website uses the following external libraries:

1. **Swiper.js**: For touch-enabled sliders
   ```html
   <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css">
   <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
   ```

2. **Font Awesome**: For icons
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
   ```

3. **Google Fonts**: For typography
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">
   ```

## Image Guidelines

### Hero Images

- **Dimensions**: 1920px × 1080px (16:9 ratio)
- **Format**: JPG with 80-85% quality
- **File Size**: Optimize to under 300KB
- **Content**: Landscape shots with space for text overlay

### Tour/Service Images

- **Dimensions**: 800px × 600px (4:3 ratio)
- **Format**: JPG with 80% quality
- **File Size**: Under 150KB

### Team Photos

- **Dimensions**: 400px × 400px (1:1 square)
- **Format**: JPG with 85% quality
- **Style**: Professional headshots with consistent background

### Gallery Images

- **Dimensions**: 1200px × 800px (3:2 ratio)
- **Format**: JPG with 80% quality
- **File Size**: Under 200KB

### Logo

- **Format**: PNG with transparency
- **Variants**: Regular (color) and white (for dark backgrounds)

## Maintenance

### Regular Updates

1. **Content Updates**:
   - Tour packages and pricing
   - Testimonials
   - Team members
   - Gallery photos

2. **Technical Maintenance**:
   - Check for broken links
   - Update external libraries
   - Test contact form functionality
   - Verify responsive design on new devices

3. **Performance Optimization**:
   - Compress new images
   - Minimize CSS and JavaScript
   - Check page load times

### Troubleshooting Common Issues

1. **Slider Navigation Issues**:
   - Check Swiper.js initialization in script.js
   - Verify CSS for navigation buttons
   - Ensure image paths are correct

2. **Responsive Design Problems**:
   - Check media queries in responsive.css
   - Test on multiple devices and browsers

3. **Form Submission Errors**:
   - Verify form action and method
   - Check JavaScript validation
   - Test with different inputs

---

This documentation serves as a comprehensive guide to recreate and maintain the Spantik Adventure tourism website. For any additional questions or clarifications, please refer to the code comments or contact the original developer.
