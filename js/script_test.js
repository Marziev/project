"use strict";

// УСЛОВИЯ=============================================================

// const num = 50;

// if (num > 100){
//     console.log('Error');
// } else if (num < 50){
//     console.log('Error_2');
// } else {
//     console.log('OK');
// }

// (num === 50) ? console.log('OK') : console.log('Error');


// switch (num) {
//     case 49:
//         console.log('Не верно');
//         break;
//     case 60:
//         console.log('Не верно');
//         break;
//     case 50:
//         console.log('Верно');
//         break;
//     default:
//         console.log('В другой раз');
//         break;  
// }

// ЦИКЛЫ====================================================================================

// let num = 50;

// while (num < 60) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 10; i++){
//     if (i === 6){
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// ФУНКЦИИ===========================================================

let num = 10;

function showFirstMessge(text) {
    console.log(text);
    num = 20; // можем переопределить глобальную переменную но только внутри цикла 
}

showFirstMessge("Hello world");

function calc(a, b) {
    return(a + b);
}

console.log(calc(10, 5));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);