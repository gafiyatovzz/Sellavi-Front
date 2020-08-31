$(document).ready(function () {

  const categoriesContainer = document.querySelector(".latest-section > .container");

  if (categoriesContainer !== null) {

    const listDiv = document.createElement('div');
    listDiv.setAttribute('id', 'app');
    categoriesContainer.prepend(listDiv);

    const categoriesList = new Vue({
      el: '#app',
      data: {
        categories: [
          {
            title: 'Категория',
            link: '',
            img: 'https://via.placeholder.com/1000x1500'
          },
          {
            title: 'Категория',
            link: '',
            img: 'https://via.placeholder.com/1000x1500'
          },
          {
            title: 'Категория',
            link: '',
            img: 'https://via.placeholder.com/1000x1500'
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