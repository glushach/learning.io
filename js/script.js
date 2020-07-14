'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');
// console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true
};

// console.log(personalMovieDB.count);
const a = prompt('Один из последних просмотренных фильмов', ''); //ключ
const b = prompt('На сколько вы его цениваете'); //значение
const c = prompt('Один из последних просмотренных фильмов', ''); //ключ
const d = prompt('На сколько вы его цениваете'); //значение

personalMovieDB.movies[a] = b; //свойство объекта объекта
personalMovieDB.movies[c] = d; //свойство объекта объекта

console.log(personalMovieDB);
