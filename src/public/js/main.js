const app = new Vue ({
    el: '#app',
    data: {
        showCart: true,
        userSearch: '',
        filtered: [],
        cartItems: [],
        products: [],
        value: 150, // значение для ползунка в catalog.html
    },
    computed: {
        // Подсчет суммы всех товаров
        totalSum() {
            let sumProd = [];
            this.cartItems.forEach((el) => sumProd.push(el.price));
            return sumProd;
        },
        // Подсчет количества всех товаров
        totalQuantity() {
            let sumQuantity = [];
            this.cartItems.forEach((el) => sumQuantity.push(el.quantity));
            return sumQuantity;
        },
        // Подсчет итоговой суммы по всем добавленным товарам в корзину
        totalAll() {
            let total = this.totalQuantity.map((value, index) => { return value * this.totalSum[index] });
            let sumTotal = 0;
            for(let i = 0; i < total.length; i++){
                sumTotal += parseInt(total[i]);
            }
            return sumTotal;
        }
    },
        methods: {
            getJson(url){
                return fetch(url)
                    .then(result => result.json())
                    .catch(error => {
                        console.log(error)
                    })
            },
            postJson(url, data){
                return fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                    .then(result => result.json())
                    .catch(error => {
                        console.log(error)
                    })
            },
            putJson(url, data){
                return fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                    .then(result => result.json())
                    .catch(error => {
                        console.log(error)
                    })
            },
            deleteJson(url, data){
                return fetch(url, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(result => result.json())
                    .catch(error => {
                        console.log(error)
                    })
            },
            addProduct(product){
                let find = this.cartItems.find(el => el.id_product === product.id_product);
                if (find) {
                    this.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                        .then(data => {
                            if (data.result) {
                                find.quantity++;
                            }
                        })
                } else {
                    let prod = Object.assign({quantity: 1}, product);
                    this.postJson(`/api/cart`, prod)
                        .then(data => {
                            if (data.result) {
                                this.cartItems.push(prod);
                            }
                        })
                }
            },
            remove(product){
                if(product.quantity > 1){
                    this.putJson(`/api/cart/${product.id_product}`, {quantity: -1})
                        .then(data => {
                            if(data.result){
                                product.quantity--
                            }
                        })
                } else {
                    this.deleteJson(`/api/cart/${product.id_product}`)
                        .then(data => {
                            if(data.result){
                                this.cartItems.splice(this.cartItems.indexOf(product), 1);
                            }
                        })
                }
            },
            removeAll(product){
                this.deleteJson(`/api/cart/${product.id_product}`)
                    .then(data => {
                        if(data.result){
                            this.cartItems.splice(0, this.cartItems.length);
                        }
                    })
            },
        },
    mounted(){

        // Товары для корзины
        this.getJson(`/api/cart`)
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });


        // Каталог товары
        this.getJson(`/api/products`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
});

