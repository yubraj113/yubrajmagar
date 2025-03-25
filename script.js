document.addEventListener('DOMContentLoaded', function() {
    // Sample book data
    const books = [
        {
            title: "Atomic Habits",
            author: "James Clear",
            price: "$12.99",
            rating: 4.5,
            image: "https://m.media-amazon.com/images/I/71tR3ZEQ2BL._AC_UF1000,1000_QL80_.jpg"
        },
        // Add more books...
    ];

    // Render books
    const bookGrid = document.querySelector('.book-grid');
    books.forEach(book => {
        bookGrid.innerHTML += `
            <div class="book-card">
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <div class="rating">
                    ${generateStars(book.rating)}
                    <span>${book.rating}</span>
                </div>
                <p class="price">${book.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
    });

    // Star rating helper
    function generateStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i - 0.5 <= rating) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }
});