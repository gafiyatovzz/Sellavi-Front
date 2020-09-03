$(document).ready(() => {
  const itemsContainer = document.querySelector('.row.products.grid');
  const itemsList = Array.from(itemsContainer.querySelectorAll('.product-item'));
  
  const itemsData = itemsList.map((item) => {
    const imgLink = item.querySelector('.media img').src;
    const itemLink = item.querySelector('.media a').href;
    const itemTitle = item.querySelector('.caption-title a').textContent;
    const price = item.querySelector('.price').textContent.trim();
    const itemPrice = price.split('.')[0];

    return {
      imgLink,
      itemLink,
      itemTitle,
      itemPrice,
    };
  });
});
