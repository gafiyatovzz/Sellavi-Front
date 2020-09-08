document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('.latest-section');
    const constructor = document.createElement('div');
    constructor.id = 'constructor';
    root.append(constructor);

    let Constructor = new Vue({
        el: '#constructor',
        data: {
            price: 500,
            tiersStructures: [{number: 1, extraPrice: 0},{number: 2, extraPrice: 500},{number: 3, extraPrice: 900}],
            tastes: ['Ваниль', 'Шоколад', 'Мраморный', 'Медовый'],
            fillings: ['Белый крем', 'Шоколадный крем', 'Крем-чиз'],
            selectedProperties: {structure: 0},
            forms: ['Круг', 'Квадрат'],
            covers: [{type: 'Без покрытия', extraPrice: 0}, {type: 'Белый крем', extraPrice: 300}, {type: 'Шоколадный крем', extraPrice: 400}, {type: 'Крем-чиз', extraPrice: 500}],
            toppings: [{type: 'Без топпинга', extraPrice: 0}, {type: 'Белый соус', extraPrice: 300}, {type: 'Карамельный сироп', extraPrice: 400}, {type: 'Кленовый сироп', extraPrice: 500}],
            berries: ['Малина', 'Клубиника', 'Еживика', 'Голубика', 'Вишня', 'Земляника', 'Черешня'],
            berriePrice: 300,
            decors: ['Малина', 'Клубиника', 'Еживика', 'Голубика', 'Вишня', 'Земляника', 'Черешня'],
            decorPrice: 300,
            activeSelectors: [],
        },
        methods: {
            activateSelector(name) {
                if (this.activeSelectors.includes(name)) {
                    this.activeSelectors.splice(this.activeSelectors.indexOf(name), 1);
                } else {
                    this.activeSelectors.push(name);
                }
            },
            selectProperty(name, value) {
                this.selectedProperties[name] = value;
                console.log(this.selectedProperties)
            }

        },
        template: `
                <div class="constructor">
                    <h2 class="constructor__title"></h2>
                    <div class="constructor__container">
                        <div class="constructor__panel">
                            <div class="constructor__selector">
                                <span>Выбери колличество уровней</span>
                                <div class="constructor__selector-icon" @click="activateSelector('tires')">V</div>
                                <ul class="constructor__selector-options" v-if="activeSelectors.includes('tires')">
                                    <li class="constructor__selector-option" 
                                        v-for="structure of tiersStructures" 
                                        @click="selectProperty('structure', structure.number)"
                                    >{{structure.number}}</li>
                                </ul>
                            </div>
                            <div class="constructor__extra-options" v-if="selectedProperties.structure">
                                <div class="constructor__selector-group" v-for="n in selectedProperties.structure">
                                    <div class="constructor__selector">
                                        <span>Выбери вкус слоя {{n}}</span>
                                        <div class="constructor__selector-icon" @click="activateSelector('tireTaste'+n)">V</div>
                                        <ul class="constructor__selector-options" v-if="activeSelectors.includes('tireTaste'+n)">
                                            <li class="constructor__selector-option" 
                                                v-for="taste of tastes" 
                                                @click="selectProperty('taste'+n, taste)"
                                            >{{taste}}</li>
                                        </ul>
                                    </div>
                                    <div class="constructor__selector">
                                        <span>Выбери начинку слоя {{n}}</span>
                                        <div class="constructor__selector-icon" @click="activateSelector('tireFilling'+n)">V</div>
                                            <ul class="constructor__selector-options" v-if="activeSelectors.includes('tireFilling'+n)">
                                                <li class="constructor__selector-option" 
                                                    v-for="filling of fillings" 
                                                    @click="selectProperty('filling'+n, filling)"
                                                >{{filling}}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            <div class="constructor__selector">
                                <span>Выбери форму торта</span>
                                <div class="constructor__selector-icon" @click="activateSelector('form')">V</div>
                                <ul class="constructor__selector-options" v-if="activeSelectors.includes('form')">
                                    <li class="constructor__selector-option" 
                                        v-for="form of forms" 
                                        @click="selectProperty('form', form)"
                                    >{{form}}</li>
                                </ul>
                            </div>
                            <div class="constructor__selector">
                                <span>Выбери покрытие торта</span>
                                <div class="constructor__selector-icon" @click="activateSelector('cover')">V</div>
                                <ul class="constructor__selector-options" v-if="activeSelectors.includes('cover')">
                                    <li class="constructor__selector-option" 
                                        v-for="cover of covers" 
                                        @click="selectProperty('cover', cover)"
                                    >{{cover.type}}</li>
                                </ul>
                            </div>
                            <div class="constructor__selector">
                                <span>Выбери топпинг</span>
                                <div class="constructor__selector-icon" @click="activateSelector('topping')">V</div>
                                <ul class="constructor__selector-options" v-if="activeSelectors.includes('topping')">
                                    <li class="constructor__selector-option" 
                                        v-for="topping of toppings" 
                                        @click="selectProperty('topping', topping)"
                                    >{{topping.type}}</li>
                                </ul>
                            </div>            
                        </div>
                        
                        <div class="constructor__window">
                            
                        </div>
                    </div>
                </div>
            `
    })
});


