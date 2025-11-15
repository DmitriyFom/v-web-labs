document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      if (this.textContent === 'В корзину') {
        this.textContent = 'В корзине';
        this.disabled = true;
        this.style.backgroundColor = '#9e9e9e';
      }
    });
  });


  const searchInput = document.getElementById('searchInput');
  const productCards = document.querySelectorAll('.product-card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    productCards.forEach(card => {
      const productName = card.dataset.name.toLowerCase();
      if (productName.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});