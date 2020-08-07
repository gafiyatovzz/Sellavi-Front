$('.information-contact').ready(function() {

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

    let mediaClass = $('<div class="media requisites"></div>'),
        mediaBody = $('<div class="media-body"></div>'),
        mediaStrong = $('<strong>Реквизиты</strong>'),
        mediaText = $(`<p><strong>${orgName}</strong><br><strong>Юр.Адрес: ${orgAdress}</strong><br><strong>ИНН: ${INN}</strong><br><strong>Р/с: ${accountNumber} </strong><br><strong>К/с: ${corrNumber}</strong><br><strong>БИК: ${BIK}</strong><br><strong>КПП: ${KPP}</strong><br><strong>ОГРН: ${OGRN}</strong><br><strong>Банк: ${bankName}</strong><br><strong>Ген.Директор: ${director}</strong><br></p>`)
    
    $('.media-list').append(mediaClass);
    $('.requisites').append(mediaBody, [mediaStrong, mediaText])
 })
 