$(document).ready(function () {


  const categoriesArr = Array.from(document.querySelectorAll(".nav .sf-menu > li"));
  const categoriesTrimmed = categoriesArr.slice(1, categoriesArr.length - 1);

  const categoriesLinks = categoriesTrimmed.map((li) => {
    const link = li.firstElementChild.href;

    return link;
  });

  const categories = categoriesLinks.map((link) => {
    const result = {};

    $.get(link, function (data) {
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
    });

    return result;

  });


  const categoriesContainer = document.querySelector("#home > div.wrapper.wrapper-closed > div.content-area > section.page-section.homefeatured_category > div");

  if (categoriesContainer !== null) {
    categoriesContainer.innerHTML = '';

    const listDiv = document.createElement('div');
    listDiv.setAttribute('id', 'app');
    categoriesContainer.append(listDiv);

    const categoriesList = new Vue({
      el: '#app',
      data: {
        categories: categories
      },
      template: `
                 <div class="row">
                   <div class="custom-categories__item" v-for="category of categories">
                     <a href="category.link">
                       <span class="custom-categories__title-container"><h4 class="custom-categories__title">{{ category.title }}</h4></span>
                       <img :src="category.imgURL"></img>
                     </a> 
                   </div>
                 </div>
               `,
    });
  }
});