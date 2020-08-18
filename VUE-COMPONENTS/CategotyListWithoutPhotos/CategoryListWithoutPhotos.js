$(document).ready(function () {

    const categoriesArr = Array.from(document.querySelectorAll(".nav .sf-menu > li"));
    const categoriesTrimmed = categoriesArr.slice(1, categoriesArr.length);

    const categories = categoriesTrimmed.map((li) => {
        const link = li.firstElementChild;
        const result = {};
        result.title = link.textContent;
        result.link = link.href;
        return result;
    });

    const categoriesContainer = document.querySelector(".latest-section > .container");

    if (categoriesContainer !== null) {

        const listDiv = document.createElement('div');
        listDiv.setAttribute('id', 'app');
        categoriesContainer.prepend(listDiv);

        const categoriesList = new Vue({
            el: '#app',
            data: {
                categories: categories
            },
            template: `
                 <div class="row">
                   <div class="custom-categories__item" v-for="category of categories">
                     <a :href="category.link">
                       <span class="custom-categories__title-container"><h4 class="custom-categories__title">{{ category.title }}</h4></span>
                     </a> 
                   </div>
                 </div>
               `,
        });
    }
});
