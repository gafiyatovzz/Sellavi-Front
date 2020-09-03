$(document).ready(function() {
    $(".custom_banner").html("<div class=\"banner-bg-img\">\n" +
        "  <form action=\"#\" class=\"custom-banner-container\">\n" +
        "    <h1>Рассчитайте стоимость уборки:</h1>\n" +
        "<label>Стоимость от 150 руб./м²</label>" +
        "\n" +
        "    <label for=\"size\"><b>Размер квартиры (м²):</b></label>\n" +
        "    <input class=\"sizeFlat\" type=\"text\" placeholder=\"Введите размер квартиры\" name=\"size\">\n" +
        "\n" +
        "    <label for=\"resultCost\"><b>Итого:</b></label>\n" +
        "    <input class=\"resultCostInput\" type=\"text\" placeholder=\"Итого\" name=\"resultCost\">\n" +
        "\n" +
        "  </form>\n" +
        "</div>");

    $(".sizeFlat").on('keyup', function() {
        let size = $(".sizeFlat").val();
        let price = $("#home > div.wrapper.wrapper-closed > div > section > div > h2 > div > div:nth-child(2) > a > p.gallery__price").text().trim().slice(0, -5).replace(/\s/g, '');
        console.log(price);
        let result = Number(size) * Number(price);
        $(".resultCostInput").val(result + ".руб");
    });
});