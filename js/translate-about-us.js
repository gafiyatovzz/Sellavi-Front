/* Translate text */
$(document).ready(function() {
      
   const widget = $('.footer-widgets>.container>.row>.col-md-3:first>.widget')
   const widTitle = widget.find('.widget-title');
   const widCat = widget.find('.widget-categories>ul>li:first-child>a');
   let textTrans = 'About us ';
   let textRus = 'О нас'

   if (widTitle.html() == textTrans || widCat.html() == textTrans) {
      widTitle.text(textRus);
      widCat.text(textRus);
    }
});
// /* Change policy text DELETE */
// $(document).ready(function() {
//     $('.checkout-checkout').ready( function() {
//         const checkboxLable =  $('.checkbox>label');
//         checkboxLable.html('Согласен(-а) с <a href="/terms-return/" " style="text-decoration: none !important; "><b>Условиями</b></a>');
//   })   
// })