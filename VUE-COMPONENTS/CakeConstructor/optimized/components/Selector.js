document.addEventListener('DOMContentLoaded', () => {
        return (Vue.component('selector', {
            props: ['activeSelectors', 'name', 'title', 'options', 'selectedProperties'],
            methods: {
                selectProperty(name, value){
                    this.$emit('select-property', name, value);
                },
                activateSelector(name){
                    this.$emit('activate-selector', name);
                },
            },
            template: `
                <div class="constructor__selector">
                    <h3 class="constructor__subtitle">{{title}}</h3>
                    <div class="constructor__selector-area">
                        <span v-if="selectedProperties[name]">{{selectedProperties[name]}}</span>
                        <span v-else>Выбрать</span>
                        <div class="constructor__selector-icon" @click="activateSelector(name)">V</div>
                        <ul class="constructor__selector-options" v-if="activeSelectors.includes(name)">
                            <li class="constructor__selector-option" 
                                v-for="option of options" 
                                @click="selectProperty(name, option.type)"
                            >{{option.type}}</li>
                        </ul>
                    </div>
                </div>
            `
        }))
});



