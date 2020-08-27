$(document).ready(function () {

  const container = document.querySelector(".latest-section > .container");
  if (container !== null) {
    const preloader = document.createElement('div');
    preloader.classList.add('loader');
    container.prepend(preloader);


    const categoriesArr = Array.from(document.querySelectorAll(".nav .sf-menu > li"));
    const categoriesTrimmed = categoriesArr.slice(1, categoriesArr.length);

    const categoriesLinks = categoriesTrimmed.map((li) => {
      const link = li.firstElementChild.href;

      return link;
    });

    const subcategoriesList = categoriesTrimmed.map((li) => {
      const subcategoriesLink = Array.from(li.lastElementChild.querySelectorAll('a'));
      const result = subcategoriesLink.map((link) => {
        return { title: link.textContent, href: link.href };
      });

      return result;
    });

    const categories = [];

    for (let link of categoriesLinks) {

      const result = {};
      result.subcategories = subcategoriesList[categoriesLinks.indexOf(link)];

      $.ajax({
        url: link,
        type: "get",
        async: true,
        success: function (data) {
          const doc = new DOMParser().parseFromString(data, "text/html");

          const categoryTitle = doc.querySelector('.page-header h1').textContent;
          const categoryLink = link;

          let imgLink;

          if (doc.querySelector('.main-slider .sub img')) {
            imgLink = doc.querySelector('.main-slider .sub img').src;
          } else {
            imgLink = 'https://via.placeholder.com/350x350';
          }

          result.title = categoryTitle;
          result.link = categoryLink;
          result.img = imgLink;

          categories.push(result);

          if (categories.length === categoriesLinks.length && Object.keys(categories[categoriesLinks.length - 1]).length) {
            render(categories)
          }
        },
      });
    }
  }

  const render = (categories) => {
    const categoriesContainer = document.querySelector(".latest-section > .container");

    if (categoriesContainer !== null) {
      categoriesContainer.firstElementChild.remove();

      const listDiv = document.createElement('div');
      listDiv.setAttribute('id', 'app');
      categoriesContainer.prepend(listDiv);

      const cat = [...categories];

      const categoriesList = new Vue({
        el: '#app',
        data: {
          categories: cat
        },
        template: `
          <div class="custom-categories">
            <h2 class="custom-categories__main-title">Лыжи? Лыжи!</h2>
            <div class="row">
              <div class="custom-categories__item" v-for="category of categories">
                <a :href="category.link">
                  <span class="custom-categories__title-container">
                    <h4 class="custom-categories__title">{{ category.title }}</h4>
                  </span>
                  <img :src="category.img"></img>
                </a>
                <div v-if="category.subcategories.length > 0" class="custom-categories__mask"></div>
                <ul class="custom-categories__subcategories" v-if="category.subcategories.length > 0">
                  <li v-for="subcategory of category.subcategories" class="custom-categories__subcategory"><a
                  :href="subcategory.href">{{ subcategory.title }}</a></li>
                </ul>
              </div>
            </div>
          </div>
        `,
      });
    }
  };
});
