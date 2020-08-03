$('.information-contact').ready(function() {
    let mediaClass = $('<div class="media requisites"></div>'),
        mediaBody = $('<div class="media-body"></div>'),
        mediaStrong = $('<strong>Реквизиты</strong>'),
        mediaText = $('<p><strong>ИП "Чикин Сергей Васильевич"</strong><br><strong>Адрес: 111024, Москва, проезд Энтузиастов, д.19а</strong><br><strong>ИНН: 772205643602 </strong><br><strong>Р/с: 40802 810 8 38000069178</strong> <br><strong>К/с: 30101810400000000225</strong><br><strong>БИК: 044525225</strong><br></p> ')
    
    $('.media-list').append(mediaClass);
    $('.requisites').append(mediaBody, [mediaStrong, mediaText])
 })
 