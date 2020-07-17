'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
    // Решение с помошью цикла for
    for (let i=0; i < 2; i++){
      const a = prompt('Один из последних просмотренных фильмов', ''); //ключ
      const b = prompt('На сколько вы его цениваете'); //значение
  
  
      if(a!=null && b!=null && a!='' && b!='' && a.length < 50){ //пользователь не нажал отмену a, b, пользователь не ввел пустую строку, длина строки меньше 50 символов
        personalMovieDB.movies[a] = b; //свойство объекта объекта
        console.log('done');
      } else {
        console.log('error');
        i--;//вернуться на итерацию назад
      }
    }
  },
  detectPersonalLevel: function() {
    if(personalMovieDB.count < 10){
      console.log('Просмотрено довольно мало фильмов');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
      console.log('Вы класический зритель');
    }else if(personalMovieDB.count >= 30){
      console.log('Вы киноман');
    }else{
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function(hidden){
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++){
      // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
      // personalMovieDB.genres[i - 1] = genre;
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if(genre === '' || genre == null) {
        console.log('Вы вели некоректные данные или не ввели их вообще');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};



