// Simple functionality to display an alert when items are clicked
const products = document.querySelectorAll('.product');
products.forEach(product => {
    product.addEventListener('click', () => {
        alert(`Thanks for your interest in our ${product.querySelector('h4').textContent}!`);
    });
});
