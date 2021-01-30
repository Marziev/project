"use strict"



// if (num > 100){
//     console.log('Error');
// } else if (num < 50){
//     console.log('Error_2');
// } else {
//     console.log('OK');
// }

// (num === 50) ? console.log('OK') : console.log('Error');

const num = 50;

switch (num) {
    case 49:
        console.log('Не верно');
        break;
    case 60:
        console.log('Не верно');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('В другой раз');
        break;  
}