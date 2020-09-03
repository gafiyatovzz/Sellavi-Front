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
                    <label for="randomizer-price" value="maxPrice">Введи максимальный бюджет на подарок</label>
                    <input type="number" id="randomizer-price" value="maxPrice" @input="changePrice">
                    <div class="randomizer__window">
                        <div v-if="randomizerState === 'loading'" class="randomizer__loader">
                            Загрузка
                        </div>
                        <div v-if="randomizerState === 'show'" class="randomizer__item">
                            <a :href="activeItem.itemLink">
                                <img :src="activeItem.imgLink" alt="">
                                <h3 class="randomizer__subtitle">{{activeItem.itemTitle}}</h3>   
                                <p class="randomizer__description">{{activeItem.itemPrice}}</p>   
                            </a>
                        </div>
                        <div v-if="randomizerState === 'start'" class="randomizer__start">
                            <h3 class="randomizer__subtitle">Введи максимальную цену и начни подбор подарка!</h3>
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
            `
  })
});
