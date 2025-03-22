# Image Optimization Guidelines for Spantik Adventure Website

## General Guidelines

1. **Dimensions**:

   - Hero/Banner Images: 1920px × 1080px
   - Gallery Thumbnails: 600px × 400px
   - Gallery Full-size: 1200px × 800px
   - Team Photos: 600px × 600px
   - Service Images: 800px × 600px
   - Logo: 200px × 60px (transparent PNG)

2. **File Formats**:

   - Use JPEG for photographs (.jpg)
   - Use PNG for images requiring transparency
   - Use SVG for icons where possible
   - Consider using WebP format with fallbacks for better performance

3. **Compression**:

   - Compress all images to reduce file size
   - Aim for JPEG quality: 75-85%
   - Use tools like TinyPNG, ImageOptim, or Squoosh

4. **File Naming**:
   - Use lowercase letters
   - Separate words with hyphens (e.g., "k2-base-camp.jpg")
   - Be descriptive (e.g., "hunza-valley-tour.jpg" instead of "image1.jpg")

## Required Images

1. **Hero Slider Images** (3-5 images):

   - hero-1.jpg: K2 or other prominent mountain view
   - hero-2.jpg: Trekking group in action
   - hero-3.jpg: Cultural scene from Gilgit Baltistan

2. **Banner Images** (1 per page):

   - about-banner.jpg
   - services-banner.jpg
   - gallery-banner.jpg
   - contact-banner.jpg

3. **Services Images**:

   - k2-base-camp.jpg
   - k2-base-camp-detail.jpg
   - baltoro-glacier.jpg
   - baltoro-glacier-detail.jpg
   - hunza-valley.jpg
   - hunza-valley-detail.jpg
   - nanga-parbat-detail.jpg
   - skardu-detail.jpg
   - transport-detail.jpg

4. **Gallery Images** (12+ images):

   - Create both thumbnails and full-size versions
   - Ensure variety: mountains, trekking, culture, landscapes

5. **Team Photos** (3+ images):

   - team-1.jpg (Founder)
   - team-2.jpg (Operations Manager)
   - team-3.jpg (Senior Guide)

6. **About Page Images**:

   - about-img.jpg (Team or founder image)
   - about-preview.jpg (For home page)

7. **Testimonial Images**:

   - testimonial-1.jpg
   - testimonial-2.jpg
   - testimonial-3.jpg

8. **Logo**:
   - logo.png (For light backgrounds)
   - logo-white.png (For dark backgrounds)

## Image Loading Optimization

1. Add lazy loading to images:

   ```html
   <img src="image.jpg" alt="Description" loading="lazy" />
   ```

2. Consider using responsive images with `srcset` for different screen sizes:

   ```html
   <img
     src="image-small.jpg"
     srcset="image-small.jpg 600w, image-medium.jpg 900w, image-large.jpg 1200w"
     sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
     alt="Description"
   />
   ```

3. Add appropriate alt text to all images for accessibility
