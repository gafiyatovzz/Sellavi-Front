document.addEventListener('DOMContentLoaded', function(){
    if (location.href.includes('https://store100967.sellavi.com/' || "?from_admin")) {
        const pageSection = document.querySelector('.page-section');
        const products = document.querySelector('.products')
        const product = products.querySelectorAll('.product-item');

        let twoWeek = document.createElement('div');
        let oneMonth = document.createElement('div');
        let row1 = document.createElement('div');
        let row2 = document.createElement('div');
        let titleWeek = document.createElement('h2');
        let titleWeekSpan = document.createElement('span')
        let titleMonth = document.createElement('h2');
        let titleMonthSpan = document.createElement('span');
    

        twoWeek.classList.add('container', 'twoWeek')
        oneMonth.classList.add('container', 'oneMonth')
        row1.classList.add('row', 'products', 'grid');
        row2.classList.add('row', 'products', 'grid');
        titleWeek.classList.add('section-title', 'mb-4', 'mt-4')
        titleMonth.classList.add('section-title', 'mb-4', 'mt-4')

        titleWeek.textContent = 'Двухнедельные линзы';
        titleMonth.textContent = 'Линзы месячного ношения';

        pageSection.append(twoWeek);
        pageSection.append(oneMonth); 

        titleWeekSpan.textContent = 'Двухнедельные линзы';
        titleMonthSpan.textContent = 'Линзы месячного ношения';

        const monthCont = document.querySelector('.oneMonth');
        const weekCont = document.querySelector('.twoWeek');

        monthCont.append(row1);
        weekCont.append(row2);
    
        weekCont.prepend(titleWeek);
        monthCont.prepend(titleMonth);
        titleWeek.append(titleWeekSpan);
        titleMonth.append(titleMonthSpan);

        const monthRow = document.querySelector('.oneMonth>.products');
        const weekRow = document.querySelector('.twoWeek>.products');

        const monthArr = ['688', '687', '669', '977'] // это потом использую для более блатной подгрузки id товаров
        const weekArr = ['668', '667'] // и это тоже
    
        product.forEach(function (i){
            const attr = i.getAttribute('data-product_id')
        
            if (attr === '688' || attr === '687' || attr === '669' || attr === '977') {
                monthRow.append(i);
            } 
            if (attr === '668' || attr === '667') {
                weekRow.append(i);
            }
        })
    }
})
