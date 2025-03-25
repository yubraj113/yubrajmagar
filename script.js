// Simple JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookCard = this.closest('.book-card');
            const bookTitle = bookCard.querySelector('h3').textContent;
            const bookPrice = bookCard.querySelector('.price').textContent;
            
            alert(`Added to cart: ${bookTitle}\nPrice: ${bookPrice}`);
            // In a real app, you would add this to a shopping cart array/object
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                alert(`Thank you for subscribing with ${email}!`);
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});