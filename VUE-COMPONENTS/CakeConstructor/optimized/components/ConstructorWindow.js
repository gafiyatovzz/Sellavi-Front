document.addEventListener('DOMContentLoaded', () => {
  return (Vue.component('constructor-window', {
    props: ['selectedProperties'],
    methods: {
    },
    template: `
                <div class="constructor__window">
                    <h3 class="constructor__window-tile" v-if="selectedProperties.tires.name < 1 || !selectedProperties['taste1'].name || !selectedProperties['filling1'].name">Тут появится ваш торт!</h3>
                    <h3 class="constructor__window-tile window-title--opened" v-else>Примерно так будет выглядеть ваш торт)</h3>
                    <div class="constructor__cake"  v-if="selectedProperties.tires.name > 0 && selectedProperties['taste1'].name && selectedProperties['filling1'].name">
                        <div :class="'constructor__cake-top top--'+selectedProperties.tires.name" v-if="selectedProperties['taste'+selectedProperties.tires.name].name && selectedProperties['filling'+selectedProperties.tires.name].name">
                            <div class="constructor__cake-berries cake-berries--strawberry" v-if="selectedProperties['berries'].includes('Клубника')" ></div>  
                            <div class="constructor__cake-berries cake-berries--blackberry" v-if="selectedProperties['berries'].includes('Ежевика')"></div>
                            <div class="constructor__cake-berries cake-berries--raspberry" v-if="selectedProperties['berries'].includes('Малина')"></div>
                            <div class="constructor__cake-berries cake-berries--blueberry" v-if="selectedProperties['berries'].includes('Голубика')"></div>
                        </div>
                        <div v-else class="constructor__cake-top top--disabled"></div>
                        <ul v-for="number in selectedProperties.tires.name" :class="'constructor__cake-tire cake-tire--'+number" v-if="selectedProperties['taste'+number].name && selectedProperties['filling'+number].name">
                            <div class="constructor__cake-decor cake-topping--chocolate" v-if="selectedProperties['decor'].includes('Шоколадная стружка')"></div>
                            <div class="constructor__cake-decor cake-topping--cookies" v-if="selectedProperties['decor'].includes('Фигурное печенье')"></div>
                            <div class="constructor__cake-decor cake-topping--marshmello" v-if="selectedProperties['decor'].includes('Маршмеллоу')"></div>
                            <div class="constructor__cake-decor cake-topping--merengue" v-if="selectedProperties['decor'].includes('Безе')"></div>
                            
                            
                            <div class="constructor__cake-topping cake-topping--white" v-if="selectedProperties['topping'].name === 'Белый соус'" ></div>  
                            <div class="constructor__cake-topping cake-topping--caramel" v-if="selectedProperties['topping'].name === 'Карамельный сироп'"></div>  
                            <div class="constructor__cake-topping cake-topping--maple" v-if="selectedProperties['topping'].name === 'Кленовый сироп'"></div>  
                        
                        
                            <div class="constructor__cake-topping cake-topping--white" v-if="selectedProperties['topping'].name === 'Белый соус'" ></div>  
                            <div class="constructor__cake-topping cake-topping--caramel" v-if="selectedProperties['topping'].name === 'Карамельный сироп'"></div>  
                            <div class="constructor__cake-topping cake-topping--maple" v-if="selectedProperties['topping'].name === 'Кленовый сироп'"></div>  
                        
                            <div class="constructor__cake-cover cake-cover--white" v-if="selectedProperties['cover'].name === 'Белый крем'" ></div>  
                            <div class="constructor__cake-cover cake-cover--chococream" v-if="selectedProperties['cover'].name === 'Шоколадный крем'"></div>  
                            <div class="constructor__cake-cover cake-cover--cheese" v-if="selectedProperties['cover'].name === 'Крем-чиз'"></div>  
                            <li v-for="layer in 4">
                                <div v-if="selectedProperties['taste'+number].name === 'Шоколад'" class="constructor__cake-layer cake-layer--chocolate"></div>
                                <div v-else-if="selectedProperties['taste'+number].name === 'Ваниль'" class="constructor__cake-layer cake-layer--vanilla"></div>
                                <div v-else-if="selectedProperties['taste'+number].name === 'Мраморный'" class="constructor__cake-layer cake-layer--marble"></div>
                                <div v-else-if="selectedProperties['taste'+number].name === 'Медовый'" class="constructor__cake-layer cake-layer--honey"></div>
                                
                                <div v-if="selectedProperties['filling'+number].name === 'Белый крем'" class="constructor__cake-layer cake-layer--white"></div>
                                <div v-else-if="selectedProperties['filling'+number].name === 'Шоколадный крем'" class="constructor__cake-layer cake-layer--chococream"></div>
                                <div v-else-if="selectedProperties['filling'+number].name === 'Крем-чиз'" class="constructor__cake-layer cake-layer--cheese"></div>
                            </li>
                            <li>
                                <div v-if="selectedProperties['taste'+number].name === 'Шоколад'" class="constructor__cake-layer cake-layer--chocolate"></div>
                                <div v-else-if="selectedProperties['taste'+number].name === 'Ваниль'" class="constructor__cake-layer cake-layer--vanilla"></div>
                                <div v-else-if="selectedProperties['taste'+number].name === 'Мраморный'" class="constructor__cake-layer cake-layer--marble"></div>
                                <div v-else-if="selectedProperties['taste'+number].name === 'Медовый'" class="constructor__cake-layer cake-layer--honey"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            `
  }))
});


