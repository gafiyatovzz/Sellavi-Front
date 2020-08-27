const ORG_NAME = 'И.П. Когай Ж.А.';
const ORG_ADRRESS = 'г. Москва, Гипермолл "Горбушкин двор", Багратионовский проезд, д.7, к.3, 2 этаж,павильон Н2-004';
const MAIL_ADDRESS = '404026, Волгоградская обл., Николаевский р-н, с. Солодушино, ул. Гагарина, д. 5';
const REG_ADDRESS = '';
const INN = '341811589174';
const KPP = '';
const OGRN = '317344300063830';
const BANKNAME = 'ПАО "СБЕРБАНК"';
const ACCOUT_NUMBER = '';
const CORR_NUMBER = '';
const BIK = '';
const DIRECTOR = 'Когай Жанна Анатольевна';


if (location.href.includes('terms-of-use')) {
    const root = document.querySelector('.requsitess');
    let requsitesData = document.createElement('div');
        requsitesData.classList.add('.requsites-data');
        requsitesData.id = 'requisites';
    if(root) {
      root.append(requsitesData);
      let Requisites = new Vue({
          el: '#requisites',
          data: {
              requisites: [
                ORG_NAME,
                ORG_ADRRESS,
                INN,
                KPP,
                OGRN,
                BANKNAME,
                ACCOUT_NUMBER,
                CORR_NUMBER,
                BIK
              ],
          },
          template: `
                <div class="requsites__data">
                    <h4 class="requsites__title">Реквизиты продавца</h4>
                    <p class="requsites__elem">Название: <span>${ORG_NAME}</span></p>
                    <p class="requsites__elem">Юр.адрес: <span>${ORG_ADRRESS}</span></p>
                    <p class="requsites__elem">Инн: <span>${INN}</span></p>
                    <p class="requsites__elem">КПП: <span>${KPP}</span></p>
                    <p class="requsites__elem">ОГРН: <span>${OGRN}</span></p>
                    <p class="requsites__elem">Банк: <span>${BANKNAME}</span></p>
                    <p class="requsites__elem">Р/С: <span>${ACCOUT_NUMBER}</span></p>
                    <p class="requsites__elem">К/С: <span>${CORR_NUMBER}</span></p>
                    <p class="requsites__elem">БИК: <span>${BIK}</span></p>
                    <p class="requsites__elem">Ген.дир: <span>${DIRECTOR}</span></p>
                </div>`
        })
    } else console.log('No element with id:list');
}

if (location.href.includes('contact')) {
  const root = document.querySelector('.contact-info');
  const list = document.createElement('div');
  list.id = 'requisites';
  if(root) {
    root.append(list);
    let Requisites = new Vue({
        el: '#requisites',
        data: {
            requisites: [
              ORG_NAME,
              ORG_ADRRESS,
              INN,
              KPP,
              OGRN,
              BANKNAME,
              ACCOUT_NUMBER,
              CORR_NUMBER,
              BIK,
              DIRECTOR
            ],
        },
        template: `
            <ul class="requisite">
                <li class="requisite__title">
                    Реквизиты
                </li>
                <li v-for="requisite in requisites">{{ requisite }}</li>
            </ul>
        `
      })
  } else console.log('No element with id:list');
}
