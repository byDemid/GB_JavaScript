'use strict';

// 1. Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий
//  объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
//  Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log 
//  и вернуть пустой объект.

function convertingNumbers(number) {
    let obj = {
        единицы: 0,
        десятки: 0,
        сотни: 0
    };
    if (!Number.isInteger(number) || number < 0 || number > 999) {
        console.log('Ожидается целое число в диапазоне от 0 до 999');
        return {};
    }
    for (const element of Object.keys(obj)) {
        obj[element] = number % 10;
        number = Math.floor(number / 10);
    }
    return obj;
}

console.log(convertingNumbers(245));
console.log(convertingNumbers(1000));

// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. 
// Какими объектами можно заменить их элементы ?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

let basket = {
    products: [
        {
            ['product name']: 'Ручка',
            count: 9,
            price: 20
        },
        {
            ['product name']: 'Тетрадь',
            count: 5,
            price: 12
        },
        {
            ['product name']: 'Сумка',
            count: 2,
            price: 500
        }
    ],
    countBasketPrice() {
        return this.products.reduce(function (totalBasketPrice, productPrice) {
            return totalBasketPrice + productPrice.price * productPrice.count;
        }, 0)
    }
};

console.log(basket.countBasketPrice());
