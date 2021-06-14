// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let i = 0;
let arr = [];
while (i < 100) {
    if (isPrimeNumber(i)) {
        arr.push(i);
    }
    i++;
}

function isPrimeNumber(number) {
    if (number < 2) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true

}

alert('Простые числа в промежутке от 0 до 100.\n' + arr);

// 2. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины
//  в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;

let basket = [
    ['Ручка', 9, 20],  // [Наименование товара, количество, цена за еденицу товара ]
    ['Тетрадь', 5, 12],
    ['Сумка', 2, 500],
];


// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function countBasketPrice() {
    var sum = 0;
    for (var i = 0; i < basket.length; i++) {
        sum += basket[i][1] * basket[i][2];
    } return sum
}

alert('Общая сумма покупки составила: ' + countBasketPrice() + ' рублей')


// 3. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

for (let i = 0; i < 10; alert(i), i++) { }