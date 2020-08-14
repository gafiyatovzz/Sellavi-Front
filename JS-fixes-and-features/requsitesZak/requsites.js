$(document).ready(function() {
    const orgName = 'ООО "АЛЬТАИР"';
    const orgAdress = '111024, Москва, проезд Энтузиастов, д.19а'
    const INN = '772205643602';
    const KPP = '7730715999';
    const OGRN = '5147746323104';
    const bankName = 'ПАО "СБЕРБАНК"';
    const accountNumber = '40702810538000146190';
    const corrNumber = '30101810400000000225';
    const BIK = '044525225';
    const director = 'Першин Александр Дмитриевич';
    
    if (location.href.includes('contact')) {
        
        let mediaClass = $('<div class="media requisites"></div>'),
            mediaBody = $('<div class="media-body"></div>'),
            mediaStrong = $('<strong>Реквизиты</strong>'),
            mediaText = $(`<p><strong>${orgName}</strong><br><strong>Юр.Адрес: ${orgAdress}</strong><br><strong>ИНН: ${INN}</strong><br><strong>Р/с: ${accountNumber} </strong><br><strong>К/с: ${corrNumber}</strong><br><strong>БИК: ${BIK}</strong><br><strong>КПП: ${KPP}</strong><br><strong>ОГРН: ${OGRN}</strong><br><strong>Банк: ${bankName}</strong><br><strong>Ген.Директор: ${director}</strong><br></p>`)

        $('.media-list').append(mediaClass);
        $('.requisites').append(mediaBody, [mediaStrong, mediaText])
    }

    if(location.href.includes('terms-of-use')) {
        let requsitesData = $('<div class="requsites-data"></div>'),
            requsitesText = $('<div class="requsites__data">' + 
                `<h4 class="requsites__title">Реквизиты</h4>` +
                `<p class="requsites__elem">Название: <span>${orgName}</span></p>` +
                `<p class="requsites__elem">Юр.адрес: <span>${orgAdress}</span></p>` +
                `<p class="requsites__elem">Инн: <span>${INN}</span></p>` +
                `<p class="requsites__elem">КПП: <span>${KPP}</span></p>` +
                `<p class="requsites__elem">ОГРН: <span>${OGRN}</span></p>` + 
                `<p class="requsites__elem">Банк: <span>${bankName}</span></p>` + 
                `<p class="requsites__elem">Р/С: <span>${accountNumber}</span></p>` + 
                `<p class="requsites__elem">К/С: <span>${corrNumber}</span></p>` + 
                `<p class="requsites__elem">БИК: <span>${BIK}</span></p>` + 
                `<p class="requsites__elem">Ген.дир: <span>${director}</span></p>` +
            '</div>');
        console.log(requsitesText);
        $('.requsitess').append(requsitesData);
        $('.requsites-data').append(requsitesText)
    }
})
 

$('.product-product').ready(function() {
    $('#button-cart').on('click', function() {
        const alerts = document.querySelectorAll('.text-danger');
        for (let alert of alerts) {
            const alertParent = alert.parentElement;
            const nameBlock = alertParent.firstElementChild;
            const name = nameBlock.textContent.toLowerCase();
            alert.innerHTML = `Поле ${name} обязательно!`
        }
    })
  })
   const widget = $('.footer-widgets>.container>.row>.col-md-3:first>.widget')
   const widTitle = widget.find('.widget-title');
   const widCat = widget.find('.widget-categories>ul>li:first-child>a');
   let textTrans = 'About us ';
   let textRus = 'О нас'

   if (widTitle.html() == textTrans || widCat.html() == textTrans) {
      widTitle.text(textRus);
      widCat.text(textRus);
    }