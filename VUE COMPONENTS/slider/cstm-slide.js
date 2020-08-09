
document.addEventListener('DOMContentLoaded', function(){

    const root = document.querySelector('.custom_section');
    const container = document.createElement('div').classList.add('container');
    const slider = document.createElement('slider').classList.add('mb-5');
    root.append(container);
    container.append(slider);
    
    new Vue({
        el: '#slider',
        data: {
        },
        template: `
            <div class="custom-slide">
                <div v-for="slide in slides" class="black-sq">
                    <article>{{ slide }}</article>
                </div>
            </div>
        `,
        props: ['slides'],
        data() {
            return {
                sliderOptions: {
                    dots: true,
                    arrows: false,
                    mobileFirst: true,
                    infinite: false,
                    responsive: [
                      {
                        breakpoint: 768,
                        settings: {            
                          arrows: true,
                          slidesToShow: 3
                        }
                      }
                    ]
                },
            }
        },
        methods: {
            initSlider() {
                $(this.$el).slick( this.sliderOptions );
            },
            destroySlider() {
                $(this.$el).slick('unslick');
            }
        },
        mounted () {
            this.initSlider();
        },
        watch: {
            slides() {
              this.destroySlider();
              Vue.nextTick( () => {
                this.initSlider();  
              });      
            }
        }
    });

    const app = new Vue({
        data: {
            words: ['word1', 'word2', 'word3'],
            newItem: '',
        },
        method: {
            addItems(item) {
                this.words.unshift(item);
                this.newItem = '';
            }
        }
    })
});