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






const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPesonalLevel: function () {
        if (personalMovieDB.count < 10){
            console.log('Просмотренно довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
                console.log('Вы классический зритель');
            } else if (personalMovieDB.count > 30){
                console.log('Вы киноман');
            } else {
                console.log('Произошла ошибка');
            }    
    },
    showMyDB: function (hidden) {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();

            if (genre == '' || genre == null) {
                i--;
            }   else  {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр${i + 1} - это ${item}`)
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};

// const a = prompt('Один из последнихпросмотренных фильмов'),
//       b = prompt('На сколько оцените'),
//       c = prompt('Один из последнихпросмотренных фильмов'),
//       d = prompt('На сколько оцените');


// personalMovieDB.movies[a] = b;      
// personalMovieDB.movies[c] = d;      







// rememberMyFilms();




// detectPesonalLevel();






// showMyDB();



// writeYourGenres();