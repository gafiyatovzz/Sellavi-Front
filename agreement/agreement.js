$(document).ready(function () {
    if (location.href.includes("checkout")) {
        $('.form_checkout').ready(function () {
            $('.checkbox>label').html('Согласен (-а) с условиями <a href="/terms-of-use/" " style="text-decoration: none !important; "><b>Публичной оферты</b></a>');
        })
    }
});