document.addEventListener("DOMContentLoaded", () => {
  
  const formatPrice = (num) => {
    const stringNum = String(num);
    const numColletion = stringNum.split('').reverse();

    numColletion.map((num, index) => {

      const padding = ' ';
      const lastChar = stringNum.length;
      const numOrder = index + 1;
      const needPadding = numOrder % 3 === 0;

      if (needPadding && numOrder !== lastChar) {
        return `${padding}${num}`;
      }

      return num;
    });

    return `${numColletion.reverse().join('')}.00 ₽`;
  };


  const productPage = document.querySelector('.row.product-single.product-item');

  if (productPage) {

    const cakeConfig = JSON.parse(localStorage.cake);

    const cakeConfigMap = {
      'форма уровней': 'form',
      'основа 1-го уровня': 'taste1',
      'основа 2-го уровня': 'taste2',
      'основа 3-го уровня': 'taste3',
      'начинка 1-го уровня': 'filling1',
      'начинка 2-го уровня': 'filling2',
      'начинка 3-го уровня': 'filling3',
      'покрытие': 'cover',
      'топпинг': 'topping',
      'ягоды': 'berries',
      'декор': 'decor',
    };

    const priceContainer = document.querySelector('.product-price');
    priceContainer.innerText = formatPrice(cakeConfig.price);

    priceContainer.style.opacity = '1';

    setTimeout(function () {

      const cakeImage = cakeConfig.image;

      let imageContainer;
      if (screen.width > 768) {
        imageContainer = document.querySelector('.pz_zoomer_wrapper.zoomHolder');
      } else {
        imageContainer = document.querySelector('div.item.only_thumb.no_images');
      }

      imageContainer.classList.add('cake-image__container');
      imageContainer.innerHTML = cakeImage;

      const optionsContainer = document.querySelectorAll('div.form-group.option-group');

      optionsContainer.forEach((container) => {
        const children = Array.from(container.children);

        const isSelect = children.some((child) => child.classList.contains('dropdown'));

        if (isSelect) {
          container.classList.add('select-container');
        } else {
          container.classList.add('checkbox-container');
        }
      });

      const buttons = document.querySelectorAll('.select-container button');

      buttons.forEach((button) => {
        button.click();
        button.click();
      });

      const selects = Array.from(document.querySelectorAll('.select-container'));

      selects.forEach((select) => {
        const selectTitle = select.querySelector('label').innerText.toLowerCase();
        const key = cakeConfigMap[selectTitle];
        const optionValue = cakeConfig[key].name;

        const selectOptionsList = Array.from(select.querySelector('ul').children);

        selectOptionsList.forEach((item) => {
          const option = item.querySelector('span').innerText.split('(')[0].trim();
          const optionSelectButton = item.querySelector('a');

          if (optionValue === option) {
            optionSelectButton.click();
          }
        })
      });

      document.querySelector('body').click();

      const checkboxGroups = Array.from(document.querySelectorAll('.checkbox-container'));

      checkboxGroups.forEach((group) => {
        const groupTitle = group.querySelector('label').innerText.toLowerCase();
        const key = cakeConfigMap[groupTitle];
        const optionValues = cakeConfig[key].map((item) => item.toLowerCase());

        const checkboxOptionsList = Array.from(group.querySelector('div').children);

        checkboxOptionsList.forEach((item) => {
          const option = item.querySelector('label').innerText.split('(')[0].trim().toLowerCase();
          const optionCheckbox = item.querySelector('input');

          if (optionValues.includes(option)) {
            optionCheckbox.checked = true;
          }
        });
      });
    }, 800);
  }
});