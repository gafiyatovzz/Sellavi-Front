document.addEventListener('DOMContentLoaded', () => {
  return (Vue.component('constructor', {
    props: ['tiersStructures', 'tastes', 'fillings', 'selectedProperties', 'forms', 'covers', 'toppings', 'berries', 'berriePrice', 'decors', 'decorPrice', 'activeSelectors'],
    methods: {
      selectProperty(payload) {
        this.$emit('select-property', payload);
      },
      activateSelector(name) {
        this.$emit('activate-selector', name);
      },
      addFeatures(payload) {
        this.$emit('add-features', payload);
      },
      saveAndBuy() {
        this.$emit('save-and-buy');
      }
    },
    template: `
                <div class="constructor">
                    <h2 class="constructor__title">Собери свой собственный торт!</h2>
                    <div class="constructor__container">
                        <div class="constructor__panel">
                            <div class="constructor__selectors">
                                <selector :active-selectors="activeSelectors"
                                    :name="'tires'"
                                    :title="'число слоёв'"
                                    :options="tiersStructures"
                                    :selected-properties="selectedProperties"
                                    @select-property="selectProperty"
                                    @activate-selector="activateSelector"
                                ></selector>
                                <div class="constructor__extra-options" v-if="selectedProperties.tires.name">
                                <div class="constructor__selector-group" v-for="n in selectedProperties.tires.name">
                                    <selector :active-selectors="activeSelectors"
                                        :name="'taste'+n"
                                        :title="'вкус яруса '+n"
                                        :options="tastes"
                                        :selected-properties="selectedProperties"
                                        @select-property="selectProperty"
                                        @activate-selector="activateSelector"
                                    ></selector>
                                    <selector :active-selectors="activeSelectors"
                                        :name="'filling'+n"
                                        :title="'начинка яруса '+n"
                                        :options="fillings"
                                        :selected-properties="selectedProperties"
                                        @select-property="selectProperty"
                                        @activate-selector="activateSelector"
                                    ></selector>
                                </div>
                            </div>
                                <selector :active-selectors="activeSelectors"
                                :name="'form'"
                                :title="'форма торта'"
                                :options="forms"
                                :selected-properties="selectedProperties"
                                @select-property="selectProperty"
                                @activate-selector="activateSelector"
                            ></selector>
                                <selector :active-selectors="activeSelectors"
                                :name="'cover'"
                                :title="'покрытие торта'"
                                :options="covers"
                                :selected-properties="selectedProperties"
                                @select-property="selectProperty"
                                @activate-selector="activateSelector"
                            ></selector>
                                <selector :active-selectors="activeSelectors"
                                :name="'topping'"
                                :title="'топпинг'"
                                :options="toppings"
                                :selected-properties="selectedProperties"
                                @select-property="selectProperty"
                                @activate-selector="activateSelector"
                            ></selector>
                            </div>
                            
                            <div class="constructor__checklist-container">
                                <check-list :options="berries"
                                    :title="'ягоды'"
                                    :name="'berries'"
                                    :price="berriePrice"
                                    @add-features="addFeatures"
                                ></check-list>
                                <check-list :options="decors"
                                    :title="'декор'"
                                    :name="'decor'"
                                    :price="decorPrice"
                                    @add-features="addFeatures"
                                ></check-list>
                            </div>
                        </div>
                        <constructor-window :selected-properties="selectedProperties"></constructor-window>
                        <button @click="saveAndBuy" class="constructor__button">Заказать торт!</button>
                    </div>
                </div>
            `

  }))
});