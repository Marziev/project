/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Одержимость",
        "Ла-ла лэнд",
        "Скотт Пилигрим против..."
    ]
};


// let adversting = document.querySelector('.promo__adv'); Работает, но...
let adv = document.querySelectorAll('.promo__adv img');
let genre = document.querySelector('.promo__genre');
let promoB = document.querySelector('.promo__bg');
let promoFilm = document.querySelector('.promo__interactive-list');
// adversting.remove();
adv.forEach(item => {
    item.remove();
});

genre.textContent = "Драма";
promoB.style.backgroundImage = 'url("img/bg.jpg")';
promoFilm.innerHTML = "";
movieDB.movies.sort();
// console.log(movieDB.movies);

movieDB.movies.forEach((film, i) => {
    promoFilm.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
            </li>
    `;
});


