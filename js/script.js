'use strict';
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true
};

//a, b, c, d - технические переменные
// const a = prompt('Один из последних просмотренных фильмов', ''); //ключ
// const b = prompt('На сколько вы его цениваете'); //значение
// const c = prompt('Один из последних просмотренных фильмов', ''); //ключ
// const d = prompt('На сколько вы его цениваете'); //значение

// personalMovieDB.movies[a] = b; //свойство объекта объекта
// personalMovieDB.movies[c] = d; //свойство объекта объекта


//Решение с помошью цикла for
// for (let i=0; i < 2; i++){
//   const a = prompt('Один из последних просмотренных фильмов', ''); //ключ
//   const b = prompt('На сколько вы его цениваете'); //значение

//   if(a!=null && b!=null && a!='' && b!='' && a.length < 50){ //пользователь не нажал отмену a, b, пользователь не ввел пустую строку, длина строки меньше 50 символов
//     personalMovieDB.movies[a] = b; //свойство объекта объекта
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;//вернуться на итерацию назад
//   }
  
// }

//Решение с помощью цикла while
// let i = 0;
// while (i < 2){
//   const a = prompt('Один из последних просмотренных фильмов', ''); //ключ
//   const b = prompt('На сколько вы его цениваете'); //значение

//   if(a!=null && b!=null && a!='' && b!='' && a.length < 50){ //пользователь не нажал отмену a, b, пользователь не ввел пустую строку, длина строки меньше 50 символов
//     personalMovieDB.movies[a] = b; //свойство объекта объекта
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;//вернуться на итерацию назад
//   }
//    i++;
// }

//Решение с помощью цикла do while
let i = 0;
do {
  const a = prompt('Один из последних просмотренных фильмов', ''); //ключ
  const b = prompt('На сколько вы его цениваете'); //значение

  if(a!=null && b!=null && a!='' && b!='' && a.length < 50){ //пользователь не нажал отмену a, b, пользователь не ввел пустую строку, длина строки меньше 50 символов
    personalMovieDB.movies[a] = b; //свойство объекта объекта
    console.log('done');
  } else {
    console.log('error');
    i--;//вернуться на итерацию назад
  }
   i++;
} while(i < 2);



if(personalMovieDB.count < 10){
  console.log('Просмотрено довольно мало фильмов');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
  console.log('Вы класический зритель');
}else if(personalMovieDB.count >= 30){
  console.log('Вы киноман');
}else{
  console.log('Произошла ошибка');
}
console.log(personalMovieDB);
