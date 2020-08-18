$(document).ready(function () {
  const categoriesContainer = document.querySelector("#home > div.wrapper.wrapper-closed > div.content-area > section.page-section.homefeatured_category > div");

  if (categoriesContainer !== null) {
    categoriesContainer.innerHTML = '';

    const listDiv = document.createElement('div');
    listDiv.setAttribute('id', 'app');
    categoriesContainer.append(listDiv);

    const categoriesList = new Vue({
      el: '#app',
      data: {
        categories: [
          {
            title: 'Роллы',
            link: 'https://store101063.sellavi.com/rolls/',
            imgURL: 'https://i.pinimg.com/originals/a5/67/55/a567554a661254b29173e4f6105b5867.jpg'
          },
          {
            title: 'Сеты',
            link: '',
            imgURL: 'https://i1.wallbox.ru/wallpapers/main/201601/b284551ca5ea30e.jpg'
          },
          {
            title: 'Горячие роллы',
            link: 'https://store101063.sellavi.com/hot-rolls/',
            imgURL: 'http://rosahotel.ru/filestore/productPhotos/biggest/p_kyrv1q73d3s3.jpg'
          },
          {
            title: 'Запеченые роллы',
            link: 'https://store101063.sellavi.com/baked/',
            imgURL: 'https://dostavka-eda-demo.ultronsale.ru/images/categories/z-rolly.jpg'
          },
          {
            title: 'Гунканы',
            link: 'https://store101063.sellavi.com/gunkans/',
            imgURL: 'https://i.ollis.ru/u/911e7328.jpg'
          },
          {
            title: 'Мини-роллы',
            link: 'https://store101063.sellavi.com/%D0%BC%D0%B8%D0%BD%D0%B8-%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/',
            imgURL: 'https://sushihata.by/assets/images/IMG_4180.jpg'
          },
          {
            title: 'Сашими',
            link: 'https://store101063.sellavi.com/%D1%81%D0%B0%D1%88%D0%B8%D0%BC%D0%B8/',
            imgURL: 'https://avatars.mds.yandex.net/get-zen_doc/1328466/pub_5d6193a8dfa9ce00ad0b2802_5d61984c5ba2b500adcf9a73/scale_1200'
          },
          {
            title: 'Суши',
            link: 'https://store101063.sellavi.com/%D1%81%D1%83%D1%88%D0%B8/',
            imgURL: 'https://pbs.twimg.com/media/D-9P-BcWwAALuoD.jpg:large'
          },
          {
            title: 'Напитки',
            link: 'https://store101063.sellavi.com/%D0%BD%D0%B0%D0%BF%D0%B8%D1%82%D0%BA%D0%B8/',
            imgURL: 'https://s1.1zoom.ru/b5050/730/Drinks_Juice_Lemons_470993_1920x1200.jpg'
          },
        ]
      },
      template: `
                 <div class="row">
                   <div class="custom-categories__item" v-for="category of categories">
                     <a :href="category.link">
                       <span class="custom-categories__title-container"><h4 class="custom-categories__title">{{ category.title }}</h4></span>
                       <img :src="category.img"></img>
                     </a> 
                   </div>
                 </div>
               `,
    });
  }
});