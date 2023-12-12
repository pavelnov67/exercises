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

/*
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
console.log(sum);*/

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

//задача: Написать объект ladder - объект, который позволяет подниматься вверх и спускаться.
//Пример работы должен быть таким:
//ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
//ladder.up(); 
//ladder.up();
//ladder.showStep(); // 2
//ladder.down();
//ladder.showStep(); // 1

/*let num1 = 30 //Number(prompt("Введите число, до которого нужно считать:"));
let num2 = 20 //Number(prompt("Введите число, до которого нужно считать:"));
if (num1 >= num2) {
    while (num1 >= num2) {
        if (num1 % 3 === 0) {
            console.log(num1);
            
        }
        num1--;
    }
} else {
    while (num1 <= num2) {
        if (num1 % 3 === 0) {
        console.log(num1);
        }
        num1++;
      }
}*/

/*
function askSquare() {
  let num = +prompt('введите число');
  num *= num;
  return(console.log(num));
}
askSquare(); */

/*let a = 5;

let res = a => Math.pow(a, 3); // метод возведения числа в степень 3


console.log(res(a));*/

//Перед вами программа, которая сперва запрашивает у пользователя сумму,
// а потом спрашивает, какую операцию он хочет с ней совершить: внести эту сумму на счет
// или снять эту сумму со счета. Если сумма снятия превышает баланс, программа выводит сообщение о недостатке средств.

/*
let bankAccount = {
  balance: 500,

  deposit: function(amount) {
    this.balance += amount;
    console.log(this.balance);
  },

  withdraw: function(amount) {
     if (this.balance >= amount) {
         this.balance -= amount;
         console.log(this.balance);
     } else {
         console.log('Недостаточно средств на счете');
     };
  },
};

const amount = Number(prompt());
const choice = prompt();

if (choice === "внести") {
    bankAccount.deposit(amount);
} else if (choice === "снять") {
    bankAccount.withdraw(amount);
};
*/

/* Создайте объект budget со свойствами income (доход) и expenses (расходы), 
значения которых вводятся пользователем и методом calculateProfit, 
который высчитывает прибыль по следующей формуле:

Прибыль = доход - расходы
Если прибыль положительная, программа выводит значение прибыли. Если прибыль равна нулю,
 программа выводит сообщение о том, что пользователь отработал в ноль. Если прибыль отрицательна,
 программа выводит насколько пользователь ушел в минус. 

Используйте интерполяцию.

let budget = {};

budget.income = +prompt('введите доход');
budget.expenses = +prompt('введите расходы');
budget.calculateProfit = function() {
  let res = budget.income - budget.expenses;
  if (res < 0) {
    return -res;
  }
  return res;
}

function rez() {
  if (budget.income > budget.expenses) {
      console.log(`Ваша прибыль составляет ${budget.calculateProfit()} рублей`);
  } else if (budget.income < budget.expenses) {
      console.log(`Вы ушли в минус на ${budget.calculateProfit()} рублей`);
  } else {
      console.log('Вы отработали в ноль');
  }
}

rez(budget.income, budget.expenses);
*/

/* Перед вами программа, которая принимает название товара, цену товара за штуку и количество товара
 и выводит сообщение в определенном формате с помощью функции calculateTotal с тремя параметрами. 
 Напишите функцию calculateTotal. Используйте интерполяцию.

const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());
const calculateTotal = function() {
  console.log(`Вы выбрали ${quantity} товаров \"${itemName}\" по цене ${itemPrice} рублей за штуку. Итого: ${quantity * itemPrice} рублей.`);
}
const message = calculateTotal(itemName, itemPrice, quantity);
*/
/*
let str = 'f2d2s2a2w2e2r2t2t2y2q';
let a = str.length;
for (let i = 1; i <= (str.length - 1); i++) {
    str = str.toUpperCase();
    console.log(str[i]);
    i++;
};*/

// Напишите программу, которая запрашивает у пользователя ввести строку и символ. 
//Программа должна подсчитать, сколько раз данный символ встречается в введенной строке, 
//а затем вывести это количество.
/*
let str = prompt('введите текст');
let sumbol = prompt('искомый символ?');
let n = 0;
for (let i = 0; i <= (str.length - 1); i++) {
    if (str[i] === sumbol) {
      n++;
    }
  }
  console.log(`Символ \"${sumbol}\" встречается ${n} раз(-а)`);

  */

//Напишите программу, которая запрашивает у пользователя строку 
//и затем выводит эту строку в обратном порядке и в нижнем регистре.
/*
let str = prompt('введите текст');

let strLow = str.toLowerCase();

let strNew = '';

for (let i = (strLow.length - 1); i >= 0; i--) {

  strNew += strLow[i];
}

console.log(strNew);
*/

/*
let num = prompt('введите число');

if (!isNaN(num) && ) {
    console.log('Вы ввели число');
} else {
    console.log('Вы ввели не число');
}*/
        
// Пользователь вводит возраст. Напишите программу, которая проверяет, 
// является ли введенное значение числом и находится ли оно в диапазоне от 18 до 65 лет включительно. 
//Если введенное значение не является числом, программа выводит сообщение об ошибке.
// Если число не попадает в диапазон выводится "Доступ запрещен", в иных случаях выводится сообщение "Доступ разрешен".

/*let age = prompt('введите число');

if (!isNaN(age)) {
  if (parseInt(age) >= 18 && age <= 65) {
    console.log('Доступ разрешен');
  } else {
    console.log('Доступ запрещен');
  }
} else {
  console.log('Ошибка: Введите ваш возраст');
}*/

//Напишите программу, которая запрашивает у пользователя число,
// а затем вычисляет и выводит его квадратный корень. 
//Если пользователь ввел отрицательное число, программа преобразует его в положительное.
/*
let num = prompt('введите число');

if (num > 0) {
  console.log(`Квадратный корень из ${num} равен ${Math.sqrt(num)}`);
} else {
  let numPos = Math.abs(num);
  console.log(`Квадратный корень из ${numPos} равен ${Math.sqrt(numPos)}`);
}*/


// Напишите программу, которая запрашивает радиус круга у пользователя и вычисляет его площадь,
// используя значение числа π (пи) как константу. Затем программа возводит площадь в 3 степень
// с помощью функции Math.pow() и выводит результат, округленный до ближайшего целого числа.

/*
let radius = 1// prompt('введите число');

let square = Math.PI * Math.pow(radius, 2);

let square3 = Math.pow(square, 3);

console.log(Math.round(square3));*/

//Перед вами программа, которая сначала запрашивает количество элементов массива,
// а затем элементы массива по одному соответствующее количество раз. 
// Программа добавляет каждый элемент, введенный пользователем, в начало массива и выводит получившийся массив.
// Заполните тело цикла так, чтобы программа работала.
/*
const numElements = Number(prompt("Введите количество элементов в массиве:"));
const userArray = [];

for (let i = 0; i < numElements; i++) {
    let elem = prompt('введите элемент');
    userArray.unshift(elem);
}

console.log(userArray);*/


//Перед вами программа, которая сначала запрашивает количество элементов массива,
// а затем элементы массива по одному соответствующее количество раз.
// Программа добавляет каждый элемент, введенный пользователем, в конец массива.
// Далее, с помощью цикла for...of в массив lengths поочерёдно добавляются длина
// каждого элемента массива userArray.  Заполните тела циклов так, чтобы программа работала.
/*
const numElements = Number(prompt("Введите количество элементов в массиве:"));
const userArray = [];
const lengths = [];

for (let i = 0; i < numElements; i++) {
  let elem = prompt('введите элемент');
  userArray.push(elem);
}

for (const word of userArray) {
  lengths.unshift(userArray[word].length);
}

console.log(lengths);*/

//Запросите у пользователя произвольные строковые значения через запятую с пробелом и поместите их в массив.
// Выведите получившийся массив.
/*
let str = prompt('введите строку');
let array = str.split(', ');
console.log(array);*/

// Запросите у пользователя произвольные значения через запятую с пробелом. 
// Поместите их в массив и переведите в числовой тип данных. Выведите массив.
/*
let str = prompt('введите строку');

let array = str.split(', ');
let array2 = [];

for (let i of array) {
  if (isNaN(i)) {
    array2.push(i);
  } else {
    i = +i;
    array2.push(i);
  }
}
console.log(array2);*/

//Запросите у пользователя произвольные значения через запятую с пробелом и поместите их в массив
//Далее, запросите у пользователя начальный и конечный индексы (включительно) поочерёдно для среза массива. 
//Используя метод slice, создайте новый массив, содержащий элементы, 
//указанные пользователем, и выведите элементы массива через запятую с пробелом.

/*
let str = prompt('введите строку');

let array = str.split(', ');

let array2 = array.slice(+prompt('введите строку'), (+prompt('введите строку') + 1));

console.log(array2.join(", "));*/

//Запросите у пользователя произвольные значения через запятую с пробелом и поместите их в массив.
//Далее, запросите у пользователя индексы элементов, которые они хотят вывести и в каком порядке через запятую.
//Выведите поочерёдно на новой строке запрошенные элементы массива.

/*let str = prompt('введите строку');

let array = str.split(', ');

let indexes = prompt('введите индексы');

let arrayInd = indexes.split(', ');

for (let i of arrayInd) {
  console.log(array[parseInt(i)]);
}*/

//Запросите у пользователя произвольные значения через запятую с пробелом и поместите их в массив.
//Далее, запросите у пользователя индексы элементов, которые они хотят вывести и в каком порядке через запятую.
//Выведите через пробел запрошенные элементы массива.

/*let str = prompt('введите строку');
let arrayInput = str.split(', ');

let indexes = prompt('введите индексы');
let arrayInd = indexes.split(', ');

let arrayOut = [];

for (let i of arrayInd) {
  let n = arrayInput[parseInt(i)];
  arrayOut.push(n);
  
}
console.log(arrayOut.join(' '));*/

//Перед вами массив с названиями столиц некоторых стран.
// Используя метод filter, создайте новый массив, который будет содержать только те столицы,
// которые начинаются с буквы "А". Выведите массив
/*
const capitals = [
  "Токио", "Афины", "Нью-Дели", "Сеул", "Джакарта", "Багдад", "Астана", "Москва", "Анкара", 'Абасраца'
];
const aCapitals = capitals.filter((letters) => {
  return letters.includes('А');
});

console.log(aCapitals);*/

//Запросите у пользователя ввод названий столиц через пробел и поместите их в массив.
// Если массив содержит элемент "Андорра-Ла-Велла", выведите массив со столицами,
// которые заканчиваются на букву А. Если не содержит - выведите массив со столицами, которые заканчиваются на букву Н.

/*
let capitals = 'Пекин Берлин Якутск Алжир Андорра-Ла-Велла Вашингтон Махачкала';
let arrayCapitals = capitals.split(' ');

let aCapitals = arrayCapitals.includes('Андорра-Ла-Велла') ? arrayCapitals.filter(city => city.endsWith('а')) : arrayCapitals.filter(city => city.endsWith('н'));

console.log(aCapitals);*/

//Запросите у пользователя строковые значения через пробел и поместите их в массив. 
// Используя метод map, создайте новый массив, который будет содержать эти значения, написанные заглавными буквами.
/*
let arrayWord = prompt().split(" ");

let arrayWordsUpper = arrayWord.map((i) => {
  return i.toUpperCase();
});

console.log(arrayWordsUpper);*/

// Запросите у пользователя ввод имен через запятую с пробелом.
// Создайте массив из этих имен и используя метод map, создайте новый массив,
// в котором каждое имя будет иметь префикс "Пока, " добавленный перед именем.
// Затем выведите получившийся массив.
/*
let arrayName = prompt().split(", ");

let byeName = arrayName.map((i) => {
  return 'Пока, ' + i;
});

console.log(byeName);*/

// Перед вами массив cities, содержащий названия городов.
// Напишите программу, которая запрашивает у пользователя название города и проверяет,
// есть ли такой город в массиве cities. Если город найден, программа должна вывести список городов,
// начинающихся с той же буквы, что и введенный пользователем город в заявленном формате.
// Если город не найден, программа должна вывести сообщение о том, что такого города нет в списке.

/*
const cities = ["Москва", "Санкт-Петербург", "Саратов", "Магадан", "Ярославль", "Самара", "Якутск"];

let yourCity = prompt();

if (cities.includes(yourCity)) {

  const a = cities.filter((i) => {
    return i.includes(yourCity[0]);
  });

  console.log(`Города, начинающиеся с буквы \"${yourCity[0]}\": ${a.join(', ')}`);

} else {
  console.log('Такого города нет в списке');
};*/