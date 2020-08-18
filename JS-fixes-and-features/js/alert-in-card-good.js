$('.product-product').ready(function () {
    $('#button-cart').on('click', function () {
        const alerts = document.querySelectorAll('.text-danger');
        for (let alert of alerts) {
            const alertParent = alert.parentElement;
            const nameBlock = alertParent.firstElementChild;
            const name = nameBlock.textContent.toLowerCase();
            alert.innerHTML = `Поле ${name} обязательно!`
        }
    })
});