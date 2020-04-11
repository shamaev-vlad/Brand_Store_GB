Vue.component('cart', {
    props: ['cartItems', 'visibility'],
    template: `<div class="cart__drop" v-show="visibility">
                <h3 v-if="!cartItems.length" class="cart__block">Cart is empty</h3>
                <cart-item
                v-for="product of cartItems"
                :key="product.id_product"
                :cart-item="product"></cart-item>
                <div class="total-cart-flex">
                    <span class="total">TOTAL</span>
                    <span class="total">$ {{$parent.totalAll}}</span>
                </div>
                    <a href="checkout.html" class="cart__check">
                <p>Checkout</p>
            </a>
            <a href="shopping_cart.html" class="go_to_cart">
                <p>Go to cart</p>
            </a>
            </div>`
});
Vue.component('cart-item', {
    props: ['cartItem'],
    computed: {
    imgCart() {
        return `img/item${this.cartItem.id_product}.jpg`
        },
    },
    template: `<div class="cart__item">
            <img class="drop-cart-img" :src="imgCart" alt="Some image">
            <div class="cart__text">
              <a href="">{{cartItem.product_name}}</a>
              <img class="cart__stars" src="img/stars.png" alt="">
              <p>{{cartItem.quantity}} x $ {{cartItem.price}}</p>
            </div>
            <input @click="$parent.$emit('remove', cartItem)" class="close-button delete" value=" " type="submit">
          </div>`
});
Vue.component('cart-item-incart', {
    props: ['cartItem'],
    computed: {
        // Задать путь к изображениям товаров помещенных в корзину
        imgCartInCart() {
            return `img/item${this.cartItem.id_product}.jpg`;
        },
        // Задать путь к изображениям товаров на странице cart.html
        classCartInCart() {
            return `cart-box${this.cartItem.id_product}`;
        },
        // Подсчет итоговой суммы в элементе subtotal на странице cart.html
        subtotal() {
            return this.cartItem.price * this.cartItem.quantity;
        }
    },
    template: `<div class="product-line">
        <div class="product-preview">
            <img class="cart-img"  :src="imgCartInCart" alt="img">
        <div class="product-line-text">
            <a href="#"><p class="cart-product-heading">{{cartItem.product_name}}</p></a>
            <img class="cart-stars" src="img/stars.png" alt="">
            <p class="feature-text">Color:<span class="cart-line2">Red</span></p>
            <p class="feature-text">Size:<span class="cart-line2">Xll</span></p>
        </div>
        </div>
        <div class="cart-line3">
            <p>$ {{cartItem.price}}</p>
            <form action="">
                <input v-model="cartItem.quantity" class="cart-input" type="text" value="">
            </form>
            <p>FREE</p>
            <p>$ {{subtotal}}</p>
            <li class="action table-text"><input @click="$parent.remove(cartItem)" class="close-button" value=" " type="submit"></li>
        </div>
        </div>`
});
Vue.component('subtotal', {
    props: ['cartItems'],
    template: `<div class="proceed">
        <div class="proceed-text">
        <p class="total-text">Sub total<span class="money">$ {{$parent.totalAll}}</span></p>
        <p class="grand-text">GRAND TOTAL<span class="pink-money">$ {{$parent.totalAll}}</span></p>
        </div>
        <a class="proceed-button" href="checkout.html">proceed to checkout</a>
    </div>`
});
