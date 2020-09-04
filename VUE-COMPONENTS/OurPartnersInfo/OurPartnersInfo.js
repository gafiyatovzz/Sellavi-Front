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
          'https://lh4.googleusercontent.com/uTPcQFh5Yte0UdrQEGeuHGSD6tf4pOq_clcoAGkeZKn2gK4vqP7sZFq_pbuBKO4ftHCpe_VDGVaNoZAXZ4fD8-nLFR8azWn-miyo-EpbAcDBBM664tsSXgQd2SrNJYPB9F2RSkf6QvBDVnMjvA',
          'https://lh4.googleusercontent.com/uTPcQFh5Yte0UdrQEGeuHGSD6tf4pOq_clcoAGkeZKn2gK4vqP7sZFq_pbuBKO4ftHCpe_VDGVaNoZAXZ4fD8-nLFR8azWn-miyo-EpbAcDBBM664tsSXgQd2SrNJYPB9F2RSkf6QvBDVnMjvA',
          'https://lh4.googleusercontent.com/uTPcQFh5Yte0UdrQEGeuHGSD6tf4pOq_clcoAGkeZKn2gK4vqP7sZFq_pbuBKO4ftHCpe_VDGVaNoZAXZ4fD8-nLFR8azWn-miyo-EpbAcDBBM664tsSXgQd2SrNJYPB9F2RSkf6QvBDVnMjvA',
          'https://lh4.googleusercontent.com/uTPcQFh5Yte0UdrQEGeuHGSD6tf4pOq_clcoAGkeZKn2gK4vqP7sZFq_pbuBKO4ftHCpe_VDGVaNoZAXZ4fD8-nLFR8azWn-miyo-EpbAcDBBM664tsSXgQd2SrNJYPB9F2RSkf6QvBDVnMjvA',
          'https://lh4.googleusercontent.com/uTPcQFh5Yte0UdrQEGeuHGSD6tf4pOq_clcoAGkeZKn2gK4vqP7sZFq_pbuBKO4ftHCpe_VDGVaNoZAXZ4fD8-nLFR8azWn-miyo-EpbAcDBBM664tsSXgQd2SrNJYPB9F2RSkf6QvBDVnMjvA',
          'https://lh4.googleusercontent.com/uTPcQFh5Yte0UdrQEGeuHGSD6tf4pOq_clcoAGkeZKn2gK4vqP7sZFq_pbuBKO4ftHCpe_VDGVaNoZAXZ4fD8-nLFR8azWn-miyo-EpbAcDBBM664tsSXgQd2SrNJYPB9F2RSkf6QvBDVnMjvA',    'https://lh4.googleusercontent.com/uTPcQFh5Yte0UdrQEGeuHGSD6tf4pOq_clcoAGkeZKn2gK4vqP7sZFq_pbuBKO4ftHCpe_VDGVaNoZAXZ4fD8-nLFR8azWn-miyo-EpbAcDBBM664tsSXgQd2SrNJYPB9F2RSkf6QvBDVnMjvA',
          'https://lh4.googleusercontent.com/uTPcQFh5Yte0UdrQEGeuHGSD6tf4pOq_clcoAGkeZKn2gK4vqP7sZFq_pbuBKO4ftHCpe_VDGVaNoZAXZ4fD8-nLFR8azWn-miyo-EpbAcDBBM664tsSXgQd2SrNJYPB9F2RSkf6QvBDVnMjvA',
          'https://lh4.googleusercontent.com/uTPcQFh5Yte0UdrQEGeuHGSD6tf4pOq_clcoAGkeZKn2gK4vqP7sZFq_pbuBKO4ftHCpe_VDGVaNoZAXZ4fD8-nLFR8azWn-miyo-EpbAcDBBM664tsSXgQd2SrNJYPB9F2RSkf6QvBDVnMjvA',
        ]
      },
      template: `
          <div class="container partners-info__container">
            <h4 class="section-title partners-info__title">Наши партнеры</h4>
            <ul class="partners-info__list">
              <li class="partners-info__item" v-for="logo of partnersLogos">
                <img class="partners-info__img" :src="logo">
              </li>
            </ul>
          </div>
      `,
    });
  }
});
