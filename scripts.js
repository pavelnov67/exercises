"use strict";

//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.


// вариант через if else
/*function weekDay(num) {
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

//let num = +prompt("введите № дня недели", 1);
//weekDay(num);

//вариант через switch case
function weekDay2(num2) {
    switch (num2) {
        case 1:
            console.log('Понедельник');
            break;
        case 2:
            console.log('Вторник');
            break;
        case 3:
            console.log('Среда');
            break;
        case 4:
            console.log('Четверг');
            break;
        case 5:
            console.log('Пятница');
            break;
        case 6:
            console.log('Суббота');
            break;
        case 7:
            console.log('Воскресение');
            break;
        default:
            console.log('у нас только 7 дней недели');
    }
}
let num2 = +prompt("введите № дня недели", 1);
weekDay2(num2);

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 4); // 3 января 2014 года
  console.log( getWeekDay(date) );
*/
//задача: выыоить числа от заданного до единицы

/*let i = +prompt("введите стартовое число", 10)
for (i; i >= 1; i--) {
  console.log(i);
}*/

// задача: запрашивать 2 числа и выводить наибольшее

/*let i = +prompt("введите первое число ", 1);
let j = +prompt('введите воторе число ', 1);
if(i > j) {
  console.log(i);
} else if(i == j) {
  console.log("числа равны");
} else {
  console.log(j);
} */

// задача: выводить "простое число", если число простое, "сложное..." - если сложное

/*let num = +prompt("введите число ", 1);
let isPtime = true;
for (let i = 2; i < num; i++) {
  if(num % i == 0) {
    isPtime = false;
    break;
  } 
}

if(isPtime) {
  console.log("is prime");
} else {
  console.log("not prime");
}*/

// задача: таблица умножения на заданное число

/*let num = +prompt('введите число', 2);
for (let i = 1; i <= 10; i++) {
  num *= i;
  console.log(num);
  num /= i;
}*/ //работает, но слишком много букав

/*
for (let i = 1; i <= 10; i++) {
  console.log('7 x ${i} = ${7 * i}');
}*/

// задача: вывести високосные года

/*let i = 4;
let year = 1891;
for (year; year <= 2021; year++)
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(year);
}*/

//задача: переписать число задом на перед

/*function reverseNumber(n) {
  n = String(n);
  return n.split('').reverse().join('');
}
console.log(reverseNumber(1234));
*/

//задача: ф-я принимает 2 значения и возвращает умноженными 

/*function multipl(a,b) {
  let mul = a * b;
  console.log(mul);
}
multipl(-5, 2.5);
*/

//задача: ф-я получает имя, фамилию, возраст возвращает строку: "Привет "имя" "фамилия" с возрастом "возраст"

/*
function greeding(name, surname, age) {
  console.log("Привет", name, surname, "с возрастом", age, "лет");
}
greeding("Nik", "Smith", 40);
*/

//задача: ф-я принимает строку пол "М" или "F" возвращает "ваш пол ..."

/*function sex(mf) {
  if (mf == "M" || mf == "m") {
    console.log("ваш пол Мужской");
  } else if (mf == "F" || mf == "f") {
    console.log("ваш пол женский");
  } else {
    console.log("ваш пол неопределён");
  }
}
let mf = prompt("введите пол M или F", "M");
sex(mf);
*/

//задача: функция принимает параметром число от 1 до 7, возвращает день недели на русском языке



//задача: функция, передаем имя, возраващает приветствие в зависимости от времени суток
/*
function dayTime(name, dt) {
    if (dt >= 6 && dt < 12) {
        console.log(`Доброе утро ${name}`);
    } else if (dt >= 12 && dt < 18) {
        console.log(`Добрый день ${name}`);
    } else if (dt >= 18 && dt < 23) {
        console.log(`Добрый вечер ${name}`);
    } else if (dt > 24) {
        console.log(`всего 24 часа ${name}`);
    } else {
        console.log(`Доброй ночи ${name}`);
    }
}

let dt = +prompt("укажите час", 1);

//let dt = new Date('September 21, 2021 20:46:00 +0700'); вариант когда время берется 
//dayTime("Роман", dt.getHours())                         из системы

dayTime("Motherfucker", dt);
*/


//задача:Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста
// (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый

/*
function ageSelec() {
    let i = 1;
    for (i; i <= 100; i++) {
        if (i >= 1 && i < 18) {
            console.log(`${i} - ребёнок`);
        } else if (i >= 18 && i < 30) {
            console.log(`${i} - молодой/ая`);
        } else if (i >= 30 && i <= 55) {
            console.log(`${i} - зрелый`);
        } else {
            console.log(`${i} - старый`);
        }
    }
}

ageSelec();

function ageSelec1(age) {
    if (age >= 1 && age < 18) {
       return ('ребёнок');
    } else if (age >= 18 && age < 30) {
        return ('молодой/ая');
    } else if (age >= 30 && age <= 55) {
        return ('зрелый');
    } else {
        return ('старый');
    }    
}

//Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение
// (Иван имеет возраст 44 и он зрелый). А также вызови внутри своей функции,
// функцию из прошлого задания

function nameAge(name, age) {
    console.log(`${name} имеет возраст ${age} и он ${ageSelec1(age)} `);
}
nameAge("Конь", 115);
*/

//задача: получить сумму зп

let salaries = {
    John: 100,
    Ann: 'zero',
    Pete: 130,
}

let sum = 0;
for (let key in salaries) {
    if (typeof salaries[key] == 'number') {
    sum += salaries[key];
}
}
console.log(sum);

/*function multiplyNumeric(salaries) {
    for (let key in salaries) {
      if (typeof salaries[key] == 'number') {
        salaries[key] *= 2;
      }
    }
  }
multiplyNumeric(salaries);
console.log(salaries);
*/
