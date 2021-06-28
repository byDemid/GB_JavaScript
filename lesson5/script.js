// 1. Создать функцию, генерирующую шахматную доску. 
// При этом можно использовать любые html-теги по своему желанию. 
// Доска должна быть разлинована соответствующим образом, т.е. 
// чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, 
// столбцы – латинскими буквами A, B, C, D, E, F, G, H.

"use strict";

const chess = {
    gameContainerEl: document.getElementById('game'),

    renderMap() {
        const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

        for (let row = 0; row < rows.length; row++) {
            const tr = document.createElement('tr');
            this.gameContainerEl.appendChild(tr);

            for (let col = 0; col < cols.length; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                if (rows[row] === 0 && cols[col] !== 0) {
                    td.innerHTML = cols[col];
                } else if (cols[col] === 0 && rows[row] !== 0) {
                    td.innerHTML = rows[row].toString();
                }

                if (this.isCellisBlack(row, col)) {
                    td.style.backgroundColor = 'grey';
                }
            }
        }
    },

    isCellisBlack(rowNum, colNum) {
        if (rowNum === 0 || colNum === 0 || rowNum === 9 || colNum === 9) {
            return false;
        }
        return (rowNum % 2 === 1 && colNum % 2 === 0) || (rowNum % 2 === 0 && colNum % 2 === 1);
    },
};

chess.renderMap();

// 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться 
// в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, 
// сгенерированная на базе JS:
// 2.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

const cartItem = {
    render(good) {
        return `<div class="good"> 
            <div><b>Наименование</b>: ${good.product_name}</div> 
            <div><b>Цена за шт.</b>: ${good.price}</div> 
            <div><b>Количество</b>: ${good.count}</div> 
            <div><b>Стоимость</b>: ${good.count * good.price}</div> 
        </div>`
    }
}


const cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [
        {
            id_product: 1,
            product_name: 'Ручка',
            count: 9,
            price: 20
        },
        {
            id_product: 2,
            product_name: 'Тетрадь',
            count: 5,
            price: 12
        },
        {
            id_product: 3,
            product_name: 'Сумка',
            count: 2,
            price: 500
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML("beforeend", `В корзине ${this.goods.length} позиций, стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пустая';
        }
    },

    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price + good.count;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};

cart.init()