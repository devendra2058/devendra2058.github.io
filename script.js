// Splash Screen Animation
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const logoContainer = document.querySelector('.logo-container');
    const typingText = document.querySelector('.typing-text');
    const fullText = 'REGISTERED TRAINING ORGANIZATION';

    // Show logo with animation
    setTimeout(() => {
        logoContainer.classList.add('show');
    }, 900);

    // Type text animation
    let currentIndex = 0;
    setTimeout(() => {
        typingText.classList.add('show');
        const typeText = setInterval(() => {
            if (currentIndex <= fullText.length) {
                typingText.textContent = fullText.slice(0, currentIndex);
                currentIndex++;
            } else {
                clearInterval(typeText);
            }
        }, 100);
    }, 800);

    // Hide splash screen and show main content
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        splashScreen.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 800);
    }, 3000);
});

// Mobile Menu Toggle
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

    const carouselImages = [
        'img/c1.jpeg',
        'img/c2.jpeg',
        'img/c3.jpeg'
    ];
    
    let currentImageIndex = 0;
    const carousel = document.querySelector('.carousel');
    
    // Create a preloader for images
    function preloadImages() {
        carouselImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    // Function to smoothly update the background image
    function updateCarouselImage() {
        // Calculate next image index
        const nextImageIndex = (currentImageIndex + 1) % carouselImages.length;
        
        // Create temporary div for next image
        const nextImageDiv = document.createElement('div');
        nextImageDiv.className = 'carousel-overlay';
        nextImageDiv.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${carouselImages[nextImageIndex]})`;
        
        // Add the new div to carousel
        carousel.appendChild(nextImageDiv);
        
        // Trigger fade in of new image
        setTimeout(() => {
            nextImageDiv.style.opacity = '1';
        }, 50);
        
        // After transition completes
        setTimeout(() => {
            // Update main carousel background
            carousel.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${carouselImages[nextImageIndex]})`;
            // Remove the temporary div
            nextImageDiv.remove();
            // Update current index
            currentImageIndex = nextImageIndex;
        }, 1500);
    }
    
    // Initialize
    preloadImages();
    updateCarouselImage();
    setInterval(updateCarouselImage, 5000); // Increased interval for smoother experience

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('show');
        }
    });
});


// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically handle the form submission
        // For now, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}


