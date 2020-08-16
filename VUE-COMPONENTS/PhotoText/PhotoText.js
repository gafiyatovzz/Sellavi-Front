$('#home > div.wrapper.wrapper-closed > div.content-area > section.page-section.message-section.mt-4 > div').append("<div id='img-component'></div>");

let header = "ПРОИЗВОДСТВО ПОЛИЭТИЛЕНОВОЙ ПРОДУКЦИИ";
let images = [
    "http://polyplast.su/img/mpk_img_03.jpg",
    "http://polyplast.su/img/mpk_img_03.jpg",
    "http://polyplast.su/img/mpk_img_04.jpg",
    "http://polyplast.su/img/mpk_img_00.jpg",
    "http://polyplast.su/img/mpk_img_01.jpg"
];

let textArea = "Компания ЗАО «МПК Полипласт» на рынке производителей полиэтиленовой продукции в Московском регионе и Центральной России работает с 1999 года. Компания специализируемся на производстве и продаже различных видов полиэтиленовых пленок, мешков, пакетов из ПВД упаковочной продукции, а также других полимерных изделий. Компания обладает собственной производственной базой. Производство продукции осуществляется на высокотехнологическом оборудование с применением качественного сырья. Весь процесс сопровождается контролем с привлечением квалифицированного персонала.";

let text = new Vue({
    el: '#img-component',
    data: {
        images, header, textArea
    },
    template:
    "<div class='img-header'><h2>{{header}}</h2>" +
        "<div class='img-row'>\n" +
        "        <img class='sellavi-img' v-for='image in images' :src='image'/>\n" +
        "</div>" +
            "<div class='img-text'>" +
                "<p class='img-text-area'>{{textArea}}</p>" +
        "</div>" +
    "</div>"
});
