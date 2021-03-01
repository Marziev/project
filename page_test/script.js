'use strict';

const btn = document.querySelector('button');

// btn.onclick = function () {
//     alert('work');
// }

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if(i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};

btn.addEventListener('click', deleteElement);


// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     e.target.remove();

// });

// btn.addEventListener('click', () => {
//     alert('2 work');
// });