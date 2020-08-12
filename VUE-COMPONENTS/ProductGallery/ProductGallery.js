
document.addEventListener('DOMContentLoaded', function(){
    if (!location.href.includes('checkout')) {
        const items = document.querySelectorAll('.product-item');
        const products = [];
        for (let item of items) {
            const product = {};
            const cover = item.querySelector('.img-fluid').src;
            product.cover = cover;
            const link = item.querySelector('.media-link').href;
            product.link = link;
            const title = item.querySelector('.caption-title').firstElementChild.textContent;
            product.title = title;
            const price = item.querySelector('.price').textContent;
            product.price = price;
            products.push(product);
        }

        const activeProducts = products.slice(0,3);
        const root = document.querySelector('.section-title');
        const gallery = document.createElement('div');
        gallery.id = 'gallery';
        root.append(gallery);

        document.querySelector('.products').remove();
        let Requisites = new Vue({
            el: '#gallery',
            data: {
                products: products,
                activeProducts: activeProducts,
                currentNumber: 3,
            },
            methods: {
                changeActive(operator) {
                    const number = this.currentNumber;
                    const products = this.products;
                    let newNumber
                    if (operator) {
                        newNumber = number + 3;
                        this.currentNumber = newNumber;
                        this.activeProducts = products.slice(number, newNumber);
                    } else {
                        newNumber = number - 3;
                        this.currentNumber = newNumber;
                        this.activeProducts = products.slice(newNumber - 3, newNumber);
                    }
                    console.log(this.activeProducts);
                    console.log(this.currentNumber);
                },
            },
            template: `
                <div class="gallery">
                    <div @click="changeActive(false)" class="gallery__arrow" style="transform: rotate(135deg)" v-if="currentNumber > 3"></div>
                    <div class="gallery__arrow gallery__arrow--disabled" style="transform: rotate(135deg)" v-else></div>
                    
                    <div class="gallery__item" v-for="product in activeProducts">
                        <a :href="product.link">
                            <img :src="product.cover" alt="" class="gallery__cover">
                            <p class="gallery__title">
                                {{product.title}}
                            </p>
                            <p class="gallery__price">
                                {{product.price}} 
                            </p>
                        </a>
                    </div>
                    <div @click="changeActive(true)" class="gallery__arrow" style="transform: rotate(-45deg);" v-if="currentNumber < products.length"></div>
                    <div class="gallery__arrow gallery__arrow--disabled" style="transform: rotate(-45deg)" v-else></div>    
                </div>
             `
        })
    }
});