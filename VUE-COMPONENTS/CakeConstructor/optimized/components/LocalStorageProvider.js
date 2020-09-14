document.addEventListener("DOMContentLoaded", () => {
  const productPage = document.querySelector('.row.product-single.product-item');

  if (productPage) {

    setTimeout(function () {
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

      const optionsContainer = document.querySelectorAll('div.form-group.option-group');

      optionsContainer.forEach((container) => {
        const childDiv = Array.from(container.children)[1];

        if (childDiv.classList.contains('dropdown')) {
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
        const optionValue = cakeConfig[key];

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
    }, 500);
  }
});
