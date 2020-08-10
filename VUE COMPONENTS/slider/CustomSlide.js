
document.addEventListener('DOMContentLoaded', function(){

    const root = document.querySelector('.custom_section');
    const container = document.createElement('div');
    const classContainer = container.setAttribute('id', 'app')
    
    root.append(container);
   
    const elem = new Vue({
        data: {
slides: [
              'HEAD',
               'BREAD',
             ] 
        },
        template: `
            <div class="custom-slide">
                <div v-for="slide in slides" class="black-sq">
                    <article>{{ slide }}</article>
                </div>
            </div>
        `,
        props: {
              
        },
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
    const slider = document.createElement('slider');
    const vOnce = slider.setAttribute('v-once', '')
     const slides = slider.setAttribute(':slides', 'words')
    slider.append(elem);
    container.append(slider)

});