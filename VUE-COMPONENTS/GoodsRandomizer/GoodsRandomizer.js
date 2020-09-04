document.addEventListener('DOMContentLoaded', () => {
  const itemsContainer = document.querySelector('.row.products.grid');
  const itemsList = Array.from(itemsContainer.querySelectorAll('.product-item'));

  const items = itemsList.map((item) => {
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

  const root = document.querySelector('.latest-section');
  const randomizer = document.createElement('div');
  randomizer.id = 'randomizer';
  root.append(randomizer);

  let Randomizer = new Vue({
    el: '#randomizer',
    data: {
      items: items,
      randomizerState: 'start',
      maxPrice: 0,
      activeItem: {},
    },
    methods: {
      startRandom() {
        this.randomizerState = 'loading';
        console.log(this.randomizerState);
        setTimeout(() => {
          const itemList = [];
          for (let item of this.items) {
            if (Number(item.itemPrice) <= this.maxPrice) {
              itemList.push(item);
            }
          }
          if (itemList.length <= 0) {
            this.randomizerState = 'error'
          } else {
            this.activeItem = itemList[Math.floor(Math.random()*(itemList.length - 1))];
            this.randomizerState = 'show';
          }
        }, 3500)
      },
      changePrice(e) {
        this.maxPrice = e.target.value;
      }
    },
    template: `
                <div class="randomizer">
                    <h2 class="randomizer__title">Подберем подарок за тебя!</h2>
                    <div class="randomizer__container">
                        <h3 class="randomizer__subtitle c-w" v-if="randomizerState === 'start'">Шаг 1. Введи максимальный бюджет на подарок</h3>
                        <h3 class="randomizer__subtitle c-w" v-if="randomizerState === 'loading'">Идет поиск...</h3>
                        <h3 class="randomizer__subtitle c-w" v-if="randomizerState === 'show' || randomizerState === 'error'">Попробовать еще раз?</h3>
                        <div class="randomizer__input">
                            <input type="number" id="randomizer-price" class="randomizer__input-field"  value="maxPrice" @input="changePrice">
                            <label for="randomizer-price" value="maxPrice" class="randomizer__input-icon">₽</label>   
                        </div>
                        <div class="randomizer__window">
                            <div v-if="randomizerState === 'loading'" class="randomizer__loader">
                                <span class="randomizer__loader-dot dot-1"></span>
                                <span class="randomizer__loader-dot dot-2"></span>
                                <span class="randomizer__loader-dot dot-3"></span>
                                <span class="randomizer__loader-dot dot-4"></span>
                                <span class="randomizer__loader-dot dot-5"></span>
                                <span class="randomizer__loader-dot dot-6"></span>
                                <span class="randomizer__loader-dot dot-7"></span>
                                <span class="randomizer__loader-dot dot-8"></span>
                            </div>
                            <div v-if="randomizerState === 'show'" class="randomizer__item">
                                <a :href="activeItem.itemLink" class="randomizer__link">
                                    <img :src="activeItem.imgLink" alt="" class="randomizer__img">
                                    <h3 class="randomizer__subtitle">{{activeItem.itemTitle}}</h3>   
                                    <p class="randomizer__description">{{activeItem.itemPrice}} ₽</p>   
                                </a>
                            </div>
                            <div v-if="randomizerState === 'start'" class="randomizer__start">
                                <h3 class="randomizer__subtitle">Шаг 2. Начни подбор подарка!</h3>
                            </div>
                            <div v-if="randomizerState === 'error'" class="randomizer__error">
                                <h3 class="randomizer__subtitle">К сожалению, такого товара нет(</h3>
                                <p class="randomizer__description">Попробуйте поменять максимальную цену</p>
                            </div>
                        </div>
                        <div class="randomizer__panel">
                            <button v-if="randomizerState === 'start' && maxPrice > 0" class="randomizer__button" @click="startRandom()">Подобрать</button>
                            <button v-if="randomizerState === 'show' && maxPrice > 0" class="randomizer__button" @click="startRandom()">Подобрать другой</button>
                            <button v-if="randomizerState === 'error' && maxPrice > 0" class="randomizer__button" @click="startRandom()">Попробовать снова</button>
                        </div>
                    </div>
                </div>
            `
  })
});
