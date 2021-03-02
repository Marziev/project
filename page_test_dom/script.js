'use strict';

// console.log(document.head); Передает head
// console.log(document.documentElement); Передает всю структуру HTML
// console.log(document.body.childNodes);// Передает всех потомков
// console.log(document.body.firstChild); Передает первый элемент
// console.log(document.body.lastChild); Передает последний элемент

// console.log(document.querySelector('#current').parentNode); Получаем родителя
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}
