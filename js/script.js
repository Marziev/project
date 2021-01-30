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

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последнихпросмотренных фильмов'),
      b = prompt('На сколько оцените'),
      c = prompt('Один из последнихпросмотренных фильмов'),
      d = prompt('На сколько оцените');


personalMovieDB.movies[a] = b;      
personalMovieDB.movies[c] = d;      

console.log(personalMovieDB);
