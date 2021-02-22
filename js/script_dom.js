"use strict";

const box = document.getElementById('box'),
       btns = document.getElementsByTagName('button'),
       circles = document.getElementsByClassName('circle'),
       hearts = document.querySelectorAll('.heart'),
       oneHeart = document.querySelector('.heart'),
       wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'bckground-color: red; width: 500px;';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'black';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'black';
// });

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я!');

div.classList.add('black');

wrapper.append(div); // всталяет элемент в конец
// wrapper.prepend(div); всталяет элемент в начало

// wrapper.before(div); также вставляет элемент
// wrapper.after(div); также вставляет элемент

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);
div.innerHTML =  "<h1>Hello world<>/h1"; 

// div.textContent = "AKROMAT";

div.insertAdjacentHTML('beforebegin', '<h2>WORLD</h2>');



