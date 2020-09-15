document.addEventListener('DOMContentLoaded', () => {

  if (document.querySelector('.custom_section')) {

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
        selectedProperties: { price: 500, tires: {name: 0, price: 0}, form: {name: '', price: 0}, cover: {name: '', price: 0}, topping: {name: '', price: 0}, berries: [], decor: [], taste1: {name: '', price: 0}, filling1: {name: '', price: 0}, taste2: {name: '', price: 0}, filling2: {name: '', price: 0}, taste3: {name: '', price: 0}, filling3: {name: '', price: 0}, image: ''},
      },
      methods: {
        activateSelector(name) {
          if (this.activeSelectors.includes(name)) {
            this.activeSelectors.splice(this.activeSelectors.indexOf(name), 1);
          } else {
            this.activeSelectors.push(name);
          }
        },
        selectProperty(payload) {
          if (!this.selectedProperties[payload.name].name) {
            this.selectedProperties.price += payload.price;
          } else {

            this.selectedProperties.price -= this.selectedProperties[payload.name].price;
            this.selectedProperties.price += payload.price;
          }


          this.selectedProperties[payload.name].name = payload.value;
          this.selectedProperties[payload.name].price = payload.price;
          this.activeSelectors.splice(this.activeSelectors.indexOf(payload.name), 1);
        },
        addFeatures(payload) {
          if (!this.selectedProperties[payload.name]) {
            this.selectedProperties[payload.name] = [];
          }
          if (payload.event.target.checked || !this.selectedProperties[payload.name].includes(payload.event.target.value)) {
            this.selectedProperties[payload.name] = [...this.selectedProperties[payload.name], payload.event.target.value];
            this.selectedProperties.price += payload.price
          } else {
            this.selectedProperties[payload.name] ? this.selectedProperties[payload.name].splice(this.selectedProperties[payload.name].indexOf(payload.event.target.value), 1) : null;
            this.selectedProperties.price -= payload.price
          }
        },
        saveAndBuy() {
          localStorage.clear();
          let cakeImage = document.querySelector('body > div > div > div > div.constructor__window > div').cloneNode(true);
          this.selectedProperties.image = cakeImage.innerHTML;
          const cakeInfo = JSON.stringify(this.selectedProperties);
          localStorage.setItem("cake", cakeInfo);
          const itemHref = `/cake-${this.selectedProperties.tires.name}/`;
          window.location = itemHref;
        }
      },
    })
  }
});





