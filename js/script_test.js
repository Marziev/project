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

// let num = 10;

// function showFirstMessge(text) {
//     console.log(text);
//     num = 20; // можем переопределить глобальную переменную но только внутри цикла 
// }

// showFirstMessge("Hello world");

// function calc(a, b) {
//     return(a + b);
// }

// console.log(calc(10, 5));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// СВОЙСТВА и МЕТОДЫ ================================================

// let str = "test";

// console.log(str.toUpperCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf('fruit'));

// const logg = "Hello world";

// console.log(logg.slice(6));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5)); // Указывается количество символов

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));

// CALLBACK ФУНКЦИЯ==============================================================

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Callback Function');
// }

// learnJS('JavaScript', done);

// ОБЪЕКТЫ И ИХ СВОЙСТАВ===============================================================

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// // delete options.name;

// // console.log(options);

// console.log(Object.keys(options).length);

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key] ) {
//         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
    
// }

// let car = {
//     color: 'grey',
//     brand: 'audi',
//     body: 'sedan',
//     year: 2003,
//     wheels: {
//         size: 18,
//         brand: 'michlen',
//         type: 'winter'
//     }
// };

// //console.log(car.wheels.size);

// for (let key in car){
//     if (typeof(car[key]) === 'object') {
//         for (let i in car[key]) {
//             console.log(`Данные автомобиля: ${key} - ${i} - ${car[key][i]}`);
//         }
        
//     } else {
//         console.log(`Данные автомобиля ${key} - ${car[key]}`);
//     }
    
// }

// МАССИВЫ И ПСЕВДОМАССИВЫ==========================================================================

// const arr = [1, 2, 15, 50, 8, 38];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }
// arr.pop();
// arr.push(10);
// arr[90] = 0;
// console.log(arr.length);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// // console.log(products);
// products.sort();
// console.log(products.join("; "));

// ССЫЛКИ==================================================================================

// let a = 5,
//     b = a;

// b = b + a;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b:1
// };

// const copy = obj; //Cсылка
// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];        
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }

// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;


// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// // console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(clone);
// console.log(add);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); // копирует

// newArray[1] = 'red';
// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];
// log(...num);

// const array = ['a', 'b'];

// // const newAr = [...array]; СПРЕД опертатор для массива

// const q = {
//     one: 1,
//     two: 2
// };

// const newQ = {...q}; СПРЕД оператор для объекта
// console.log(newQ);
// =========================================ООП==============================================================================

// let str = "some";

// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello')
//     }
// };

// const jonh = Object.create(soldier); // Создает объект наследуя свойства 

// // const jonh = {
// //     health: 100
// // };

// // jonh.__proto__ = soldier; УСТАРЕЛА=========
// // Object.setPrototypeOf(jonh, soldier); // Наследует свойства прототипа

// // console.log(jonh.armor);
// jonh.sayHello();