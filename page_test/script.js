'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('work');
// }

let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if(i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};



// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});
const link = document.querySelector('a');
link.addEventListener('click', function(eve) {
    eve.preventDefault();
    console.log(eve.target);
});

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     e.target.remove();

// });

// btn.addEventListener('click', () => {
//     alert('2 work');
// });