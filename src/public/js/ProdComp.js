Vue.component('products', {
    props: ['products'],
    template: `<div class="product__panel">
            <product 
            v-for="product of products" 
            :key="product.id_product"
            :product="product"></product>
              </div>`
});

Vue.component('product', {
    props: ['product'],
    computed: {
        // Создать класс для отображения товаров на index.html
        generatedClassIndex(){
            if (this.product.id_product <= 8) {
                return `item${this.product.id_product}`;
            }
        }
    },
    template: `<div v-if="generatedClassIndex" class="product">
        <div  :class="generatedClassIndex"></div>
        <div class="product__text">
          <a href="#" class="product__name">{{ product.product_name }}</a>
          <div class="product__price">$ {{ product.price }}</div>
        </div>
        <a @click="$parent.$emit('add-product', product)" class="product__add"><img class="white__cart" src="img/cart_white.svg" alt="cart">Add to Cart</a>
      </div>`
});

Vue.component('products-in', {
    props: ['products'],
    template: `<div class="featured-items-img">
            <product-in 
            v-for="product of products" 
            :key="product.id_product"
            :product="product"></product-in>
              </div>`
});

Vue.component('product-in', {
    props: ['product'],
    computed: {
        // Создать класс для отображения товаров на product.html
        generatedClassProduct(){
            if (this.product.id_product > 8 && this.product.id_product <= 17) {
                return `item${this.product.id_product}-prod`;
            }
        }
    },
    template: `<div v-if="generatedClassProduct" class="product">
<div :class="generatedClassProduct"></div>
          <div class="product__text">
            <a href="" class="product__name">{{ product.product_name }}</a>
            <div class="product__price">$ {{ product.price }}</div>
          </div>
          <a @click="$parent.$emit('add-product', product)" class="product__add"><img class="white__cart" src="img/cart_white.svg" alt="cart">Add to Cart</a>
          <a href="#" class="product__retweet"><i class="fa fa-retweet" aria-hidden="true"></i></a>
          <a href="#" class="product__heart"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
        </div>`
});

Vue.component('products-single', {
    props: ['products'],
    template: `<div class="women-items-img">
            <product-single 
            v-for="product of products" 
            :key="product.id_product"
            :product="product"></product-single>
              </div>`
});

Vue.component('product-single', {
    props: ['product'],
    computed: {
        // Создать класс для отображения товаров на single_page.html
        generatedClassSingle(){
            if (this.product.id_product > 17) {
                return `women-item${this.product.id_product}`;
            }
        }
    },
    template: `<div v-if="generatedClassSingle" class="gallery__product">
        <div :class="generatedClassSingle"></div>
            <div class="gallery__text">
                <a href="#" class="gallery__name">{{ product.product_name }}</a>
                <div class="gallery__price">$ {{ product.price }}</div>
            </div>
            <a @click="$parent.$emit('add-product', product)" class="product__add"><img class="white__cart" src="img/cart_white.svg" alt="cart">Add to Cart</a>
        </div>`
});