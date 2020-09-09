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
                    <span>Выбери {{title}}</span>
                    <div class="constructor__checklist-group">
                        <div class="constructor__checklist-box" v-for="option of options">
                            <span class="constructor__description">{{option}}</span>
                            <input class="constructor__checkbox" type="checkbox" :value="option" @change="addFeatures($event, name)">
                        </div>
                    </div>
                </div>
            `
    }))
});