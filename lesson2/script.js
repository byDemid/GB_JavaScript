// 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 оператор инкремента инкрементирует и возвращает значение после инкремента с=2 а=2
d = b++; alert(d);           // 1 оператор инкремента инкрементирует и возвращает значение перед инкрементированием b=2 d=1
c = (2 + ++a); alert(c);      // 5 c=(2 + (1+(a=2)))
d = (2 + b++); alert(d);      // 4 d=(2 + (b=2)) 
alert(a);                    // 3 а=3 посе префикса на строке 5
alert(b);                    // 3  b=3 после потфиксноей строки 6

// 2
var a = 2;
var x = 1 + (a *= 2); // X = 5  (*= это сокращенный оператор, полностью он будет выглядеть x = 1 + (a = a * 2) )

//3
var a = 5;
var b = -5;
if (a >= 0 && b >= 0) {
    x = a - b;
    alert(x);
} else if (a < 0 && b < 0) {
    x = a * b;
    alert(x);
}
else if (a > 0 && b < 0 || a < 0 && b > 0) {
    x = a + b;
    alert(x);
}

//4
var a = +prompt('Введите число от 0 до 15');
switch (a) {
    case 0:
        alert('0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 1:
        alert('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 2:
        alert('2,3,4,5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 3:
        alert('3,4,5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 4:
        alert('4,5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 5:
        alert('5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 6:
        alert('6,7,8,9,10,11,12,13,14,15');
        break;
    case 7:
        alert('7,8,9,10,11,12,13,14,15');
        break;
    case 8:
        alert('8,9,10,11,12,13,14,15');
        break;
    case 9:
        alert('9,10,11,12,13,14,15');
        break;
    case 10:
        alert('10,11,12,13,14,15');
        break;
    case 11:
        alert('11,12,13,14,15');
        break;
    case 12:
        alert('12,13,14,15');
        break;
    case 13:
        alert('13,14,15');
        break;
    case 14:
        alert('14,15');
        break;
    case 15:
        alert('15');
        break;
}

//5 
var a = 2;
var b = 3;

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

function mult(a, b) {
    return a * b;
}

alert(plus(a, b))
alert(minus(a, b))
alert(division(a, b))
alert(mult(a, b))

//6
function mathOperation(arg1, arg2, operation) {
    let result = 0;

    switch (operation) {
        case '+':
            result = plus(arg1, arg2);
            break;
        case '-':
            result = minus(arg1, arg2);
            break;
        case '/':
            result = division(arg1, arg2);
            break;
        case "*":
            result = mult(arg1, arg2);
            break;
    }
    return result
}

alert(mathOperation(5, 3, '*'))

//8
function power(val, pow) {
    if (pow == 1)
        return val
    else if (pow != 1)
        return val * power(val, pow - 1)
}

alert(power(4, 3))