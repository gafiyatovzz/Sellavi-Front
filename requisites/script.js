document.addEventListener('DOMContentLoaded', function(){
    if (!location.href.includes('checkout')) {
        const root = document.querySelector('.contact-info');
        const contacts = document.createElement("div");
        const info = document.createElement("div");
        info.innerHTML = "Реквизиты";
        info.classList.add('requisite__title');
        contacts.append(info);
        const info1 = document.createElement("div");
        info1.innerHTML = `ООО "АЛЬТАИР"`;
        contacts.append(info1);
        const info2 = document.createElement("div");
        info2.innerHTML = "Расчётный счёт: 40702810538000146190";
        contacts.append(info2);
        const info3 = document.createElement("div");
        info3.innerHTML = "ИНН: 7730715999";
        contacts.append(info3);
        const info4 = document.createElement("div");
        info4.innerHTML = "КПП: 773001001";
        contacts.append(info4);
        const info5 = document.createElement("div");
        info5.innerHTML = "ОГРН: 5147746323104";
        contacts.append(info5);
        const info6 = document.createElement("div");
        info6.innerHTML = `Банк: ПАО "СБЕРБАНК"`;
        contacts.append(info6);
        const info7 = document.createElement("div");
        info7.innerHTML = "БИК: 044525225";
        contacts.append(info7);
        const info8 = document.createElement("div");
        info8.innerHTML = "Кор.счёт: 30101810400000000225";
        contacts.append(info8);
        const info9 = document.createElement("div");
        info9.innerHTML = "Ген.дир: Першин Александр Дмитриевич";
        contacts.append(info9);
        root.append(contacts);
        contacts.classList.add('requisite');
    }
});