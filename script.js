// Basic Cart Functionality (for future use)
let cart = [];

const addToCartButtons = document.querySelectorAll('.product-card button');

addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const product = {
      name: button.parentElement.querySelector('h3').textContent,
      price: button.parentElement.querySelector('p').textContent,
    };

    cart.push(product);
    alert(`Added ${product.name} to your cart!`);
  });
});
