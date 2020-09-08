$(document).ready(() => {
  if(location.href === 'https://store101252.sellavi.com/?from_admin' || location.href === 'https://store101252.sellavi.com') {

    const customSection = document.querySelector('.custom_section');
    const partnersContainer = document.createElement('div');
    partnersContainer.setAttribute('id', 'partners');
    customSection.prepend(partnersContainer);
    
    const partnersInfo = new Vue({
      el: '#partners',
      data: {
        partnersLogos: [
          'https://www.sberindex.ru/images/favicon/icon200.png',
          'https://brobank.ru/wp-content/uploads/2019/10/vtb_logo_icon.png',
          'https://www.gazprom.ru/f/1/gazprom-logo-ru.png',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/LUK_OIL_Logo.svg/1200px-LUK_OIL_Logo.svg.png',
          'https://www.sberindex.ru/images/favicon/icon200.png',
          'https://brobank.ru/wp-content/uploads/2019/10/vtb_logo_icon.png',
          'https://www.gazprom.ru/f/1/gazprom-logo-ru.png',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/LUK_OIL_Logo.svg/1200px-LUK_OIL_Logo.svg.png',
        ],
        activePartners: [
          'https://www.sberindex.ru/images/favicon/icon200.png',
          'https://brobank.ru/wp-content/uploads/2019/10/vtb_logo_icon.png',
          'https://www.gazprom.ru/f/1/gazprom-logo-ru.png',
        ],
        startIndex: 0,
        partnersToShow: 3,
      },
      methods: {
        changeActive () {
          setInterval(() => {
            this.activePartners = [];
          }, 7999);
          setInterval(() => {
            this.startIndex += this.partnersToShow;
            if (this.startIndex >= this.partnersLogos.length) {
              this.startIndex = 0;
            }
            this.activePartners = this.partnersLogos.slice(this.startIndex, this.startIndex + this.partnersToShow);
          }, 8000)
        }
      },
      mounted() {
        this.changeActive()
      },
      template: `
          <div class="container partners-info__container">
            <h4 class="section-title partners-info__title">Наши партнеры</h4>
            <ul class="partners-info__list">
              <li class="partners-info__item" v-for="logo of activePartners">
                <img class="partners-info__img" :src="logo">
              </li>
            </ul>
          </div>
      `,
    });
  }
});
