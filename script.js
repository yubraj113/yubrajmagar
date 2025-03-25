// Simple interactive elements
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`Navigating to ${e.target.textContent}`);
    });
});

document.querySelector('.hero button').addEventListener('click', () => {
    alert('Redirecting to shop!');
});