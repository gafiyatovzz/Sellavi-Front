// Внутри товара убирает миниатюры фото ВАРИАНТА товара

$(document).ready(() => {
  const container = document.querySelector("#bx-pager");

  if (container !== null) {
    const photosList = container.children;

    for (const item of photosList) {
      const itemChild = item.firstElementChild;

      if (itemChild.dataset.optionValueId) {
        item.style.display = 'none';
      }
    }
  }
});
