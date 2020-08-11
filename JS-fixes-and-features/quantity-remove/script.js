document.addEventListener('DOMContentLoaded', function(){
    if (location.href.includes()) { //ВСТАВИТЬ ИМЯ СТРАНИЦЫ, С КОТОРОЙ НУЖНО УДАЛИТЬ ВЫБОР КОЛЛИЧЕСТВА
        const quantity = document.querySelector('.quantity');
        quantity.remove();
    }
});