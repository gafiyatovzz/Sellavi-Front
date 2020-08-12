
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

        let itemNumber;

        if (screen.width > 1080) {
            itemNumber = 4;
        }
        if (screen.width <= 1080 && screen.width > 700) {
            itemNumber = 2;
        }
        if (screen.width < 770) {
            itemNumber = 1;
        }

        const activeProducts = products.slice(0,itemNumber);
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
                currentNumber: itemNumber,
                itemNumber: itemNumber,
            },
            methods: {
                changeActive(operator) {
                    const itemNumber = this.itemNumber;
                    const number = this.currentNumber;
                    const products = this.products;
                    let newNumber;
                    if (operator) {
                        newNumber = number + itemNumber;
                        if (newNumber >= products.length) {
                            console.log('something')
                            this.currentNumber = itemNumber;
                            this.activeProducts = products.slice(0, itemNumber);
                        } else {
                            this.currentNumber = newNumber;
                            this.activeProducts = products.slice(number, newNumber);
                        }
                    } else {
                        newNumber = number - itemNumber;
                        if (newNumber <= 0) {
                            this.currentNumber = products.length;
                            this.activeProducts = products.slice(products.length - itemNumber, products.length);
                        } else {
                            this.currentNumber = newNumber;
                            this.activeProducts = products.slice(newNumber - itemNumber, newNumber);
                        }
                    }
                },
            },
            template: `
                <div class="gallery">
                    <div @click="changeActive(false)" class="gallery__arrow" style="transform: rotate(135deg)"></div>
                  
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
                    <div @click="changeActive(true)" class="gallery__arrow" style="transform: rotate(-45deg);" ></div>
                        
                </div>
             `
        })
    }
});