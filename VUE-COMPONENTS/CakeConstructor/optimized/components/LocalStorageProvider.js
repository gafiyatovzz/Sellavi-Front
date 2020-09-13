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
  'топпинг': 'topping'
};

const buttons = document.querySelectorAll('#product > div.form-group.col-sm-6.required.option-group > div > button');

buttons.forEach((button) => {
  button.click();
  button.click();
});

const selects = Array.from(document.querySelectorAll('#product > div.form-group.col-sm-6.required.option-group'));

selects.forEach((select) => {
  const selectTitle = select.querySelector('label').innerText.toLowerCase();
  const key = cakeConfigMap[selectTitle];
  const optionValue = cakeConfig[key];

  const selectOptionsList = select.querySelector('ul').childNodes;

  selectOptionsList.forEach((item) => {
    const option = item.querySelector('span').innerText.split('(')[0].trim();
    const optionSelectButton = item.querySelector('a');

    if (optionValue === option) {
      optionSelectButton.click();
    }
  })
});


document.querySelector('body').click();