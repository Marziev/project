"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;

// console.log(4/0);
// console.log('chair' * 5);

// const surname = "Marziev";
// const bool = true; 
// let und;

// console.log(under);

// const obj = {
//     name: "Akromat",
//     age: 28,
//     isMarried: false
// };

// console.log(obj.age);

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последнихпросмотренных фильмов'),
//       b = prompt('На сколько оцените'),
//       c = prompt('Один из последнихпросмотренных фильмов'),
//       d = prompt('На сколько оцените');


// personalMovieDB.movies[a] = b;      
// personalMovieDB.movies[c] = d;      





function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        let a = prompt('Один из последних просмотренных фильмов', ''),
            b = prompt('На сколько оцените', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b; 
            console.log('done');
        } else {
            console.log('error');
            i--;
        }  
    }
}

// rememberMyFilms();


function detectPesonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30){
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }    
}

// detectPesonalLevel();




function showMyDB(hidden) {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();