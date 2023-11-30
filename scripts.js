"use strict";

//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function weekDay(num) {
    if (num == 1) {
        console.log('Понедельник');
    } else if (num == 2) {
        console.log('Вторник');
    } else if (num == 3) {
        console.log('Среда');
    } else if (num == 4) {
        console.log('Четверг');
    } else if (num == 5) {
        console.log('Пятница');
    } else if (num == 6) {
        console.log('Суббота');
    } else if (num == 7) {
        console.log('Воскресение');
    } else {
        console.log('у нас только 7 дней недели');
    }
}

let num = +prompt("введите № дня недели", 1);
weekDay(num);
