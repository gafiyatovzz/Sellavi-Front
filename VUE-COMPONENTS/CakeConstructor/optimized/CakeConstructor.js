document.addEventListener('DOMContentLoaded', () => {

  let Constructor = new Vue({
    el: '.custom_section',
    data: {
      price: 500,
      tiersStructures: [{ type: 1, extraPrice: 0 }, { type: 2, extraPrice: 500 }, { type: 3, extraPrice: 900 }],
      tastes: [{ type: 'Ваниль', extraPrice: 0 }, { type: 'Шоколад', extraPrice: 200 }, { type: 'Мраморный', extraPrice: 300 }, { type: 'Медовый', extraPrice: 300 }],
      fillings: [{ type: 'Белый крем', extraPrice: 0 }, { type: 'Шоколадный крем', extraPrice: 200 }, { type: 'Крем-чиз', extraPrice: 300 }],
      forms: [{ type: 'Квадрат', extraPrice: 0 }, { type: 'Круг', extraPrice: 0 }, { type: 'Прямоугольник', extraPrice: 0 }],
      covers: [{ type: 'Без покрытия', extraPrice: 0 }, { type: 'Белый крем', extraPrice: 300 }, { type: 'Шоколадный крем', extraPrice: 400 }, { type: 'Крем-чиз', extraPrice: 500 }],
      toppings: [{ type: 'Без топпинга', extraPrice: 0 }, { type: 'Белый соус', extraPrice: 300 }, { type: 'Карамельный сироп', extraPrice: 400 }, { type: 'Кленовый сироп', extraPrice: 500 }],
      berries: ['Малина', 'Клубника', 'Ежевика', 'Голубика'],
      berriePrice: 300,
      decors: ['Безе', 'Маршмеллоу', 'Шоколадная стружка', 'Фигурное печенье'],
      decorPrice: 300,
      activeSelectors: [],
      selectedProperties: { tires: 0, form: '', cover: '', topping: '', berries: [], decors: [], taste1: '', filling1: '', taste2: '', filling2: '', taste3: '', filling3: '' },
    },
    methods: {
      activateSelector(name) {
        if (this.activeSelectors.includes(name)) {
          this.activeSelectors.splice(this.activeSelectors.indexOf(name), 1);
        } else {
          this.activeSelectors.push(name);
        }
      },
      selectProperty(name, value) {
        this.selectedProperties[name] = value;
        this.activeSelectors.splice(this.activeSelectors.indexOf(name), 1);
      },
      addFeatures(event, name) {
        if (!this.selectedProperties[name]) {
          this.selectedProperties[name] = [];
        }
        if (event.target.checked || !this.selectedProperties[name].includes(event.target.value)) {
          this.selectedProperties[name] = [...this.selectedProperties[name], event.target.value];
        } else {
          this.selectedProperties[name] ? this.selectedProperties[name].splice(this.selectedProperties[name].indexOf(event.target.value), 1) : null;
        }
      },
      saveAndBuy() {
        const cakeInfo = JSON.stringify(this.selectedProperties);
        localStorage.setItem("cake", cakeInfo);
        const itemHref = `/cake-${this.selectedProperties.tires}/`;
        window.location = itemHref;
      }
    },
  })
});
