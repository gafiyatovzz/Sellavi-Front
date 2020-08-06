$(document).ready(function() {
    if (location.href === "https://internokids.ru/checkout/") {
        $('.form_checkout').ready( function() {
            console.log($('.checkbox>label').html('Согласен (-а) с условиями <a href="https://internokids.ru/пользовательское-соглашение/" " style="text-decoration: none !important; "><b>Публичной оферты</b></a>'))
        })
    }
})