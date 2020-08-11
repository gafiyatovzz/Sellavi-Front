
document.addEventListener('DOMContentLoaded', function(){
    if (!location.href.includes('checkout')) {
        const root = document.querySelector('.contact-info');
        const list = document.createElement('div');
        list.id = 'requisites';
        root.append(list);
        let Requisites = new Vue({
            el: '#requisites',
            data: {
                requisites: [
                    `ООО "АЛЬТАИР"`,
                    "Расчётный счёт: 40702810538000146190",
                    "ИНН: 7730715999",
                    "КПП: 773001001",
                    "ОГРН: 5147746323104",
                    `Банк: ПАО "СБЕРБАНК"`,
                    "БИК: 044525225",
                    "Кор.счёт: 30101810400000000225",
                    "Ген.дир: Першин Александр Дмитриевич",
                ],
            },
            template: `
                <ul class="requisite">
                    <li class="requisite__title">
                        Реквизиты
                    </li>
                    <li v-for="requisite in requisites">{{ requisite }}</li>
                </ul>
            `
        })
    }
});