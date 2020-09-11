document.addEventListener('DOMContentLoaded', () => {
    return (Vue.component('check-list', {
        props: ['name', 'title', 'options'],
        methods: {
            addFeatures(event, name){
                this.$emit('add-features', event, name);
            },
        },
        template: `
                <div class="constructor__checklist">
                  <span class="constructor__checklist-title-container" v-if="title === 'ягоды'">
                    <h3 class="constructor__checklist-title constructor__checklist-title--berries">Выбери {{title}}</h3>
                  </span>
                  <span class="constructor__checklist-title-container" v-else>
                    <h3 class="constructor__checklist-title constructor__checklist-title--decor">Выбери {{title}}</h3>
                  </span>
                    <div class="constructor__checklist-group">
                        <label class="constructor__checklist-box" v-for="option of options">
                            <span class="constructor__description">{{option}}</span>
                            <input class="constructor__checkbox" type="checkbox" :value="option" @change="addFeatures($event, name)">
                            <span class="constructor__custom-checkbox"></span>
                        </label>
                    </div>
                </div>
            `
    }))
});