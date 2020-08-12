document.addEventListener('DOMContentLoaded', function(){
    if (location.href.includes('sitemap')) {
        const maps = document.querySelectorAll('.col-sm-6');
        for (let map of maps) {
            map.classList.add('map');
            const list = map.firstElementChild;
            list.classList.add('map__list');
            const brunches = list.children;
            for (let brunch of brunches) {
                brunch.classList.add('map__brunch');
                if (brunch.lastElementChild.tagName === 'UL') {
                    const subList = brunch.lastElementChild;
                    console.log(subList);
                    subList.classList.add('map__sublist');
                    subList.classList.add('map__sublist-hidden');
                    const arrow = document.createElement('div');
                    arrow.classList.add('map__arrow');
                    arrow.addEventListener("click", () => {
                        subList.classList.toggle('map__sublist-hidden')
                    });
                    brunch.append(arrow);
                }
            }
        }
    }
});
