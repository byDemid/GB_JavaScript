// 1. Доработать модуль корзины.
// a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
// b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида

"use strict";

const catalog = {
    catalogBlock: null,
    cart: null,
    list: [
        {
            id_product: 1,
            product_name: 'Ручка',
            price: 20,
        },
        {
            id_product: 2,
            product_name: 'Тетрадь',
            price: 12,
        },
        {
            id_product: 3,
            product_name: 'Сумка',
            price: 500,
        },
    ],

    init(catalogBlockClass, cart) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.cart = cart;
        this.render();
        this.addEventHandlers();
    },

    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const id_product = +event.target.dataset.id_product;
        const productToAdd = this.list.find((product) => product.id_product === id_product);
        this.cart.addToBasket(productToAdd);
    },

    getCatalogListLength() {
        return this.list.length;
    },

    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <button class="product__add-to-cart" data-id_product="${item.id_product}">Купить</button>
            </div>`;
    },

    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'Каталог товаров пуст.';
    },
};

const cart = {
    cartBlock: null,
    clrCartButton: null,
    goods: [],

    init(cartBlockClass, clrCartButton) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);

        this.addEventHandlers();
        this.render();
    },

    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    dropCart() {
        this.goods = [];
        this.render();
    },

    render() {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    addToBasket(product) {
        if (product) {
            const findInBasket = this.goods.find((item) => product.id_product === item.id_product);
            if (findInBasket) {
                findInBasket.count++;
            } else {
                this.goods.push({ ...product, count: 1 });
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    getCartGoodsLength() {
        return this.goods.length;
    },

    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.textContent = 'Корзина пуста.';
    },

    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    renderCartItem(item) {
        return `<div>
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <p>${item.count} шт.</p>
            </div>`;
    },
};

catalog.init('catalog', cart);
cart.init('cart', 'clr-cart');
