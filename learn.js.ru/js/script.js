let name = 'Jone',
		admin = name;

console.log(admin);

let ourPlanetName = 'Earth';
let currentUserName = 'Jone';

console.log(1/0);

let str = "Привет! Я переменная str!";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные. Например, ${str}`;
console.log(phrase);

console.log(typeof undefined);

name = "Ilya";
console.log( `hello ${1}!` ); // ?
console.log( `hello ${"name"}!` ); // ?
console.log( `hello ${name}!` ); // ?


// //Модальное окно с вопросом и полем для ввода текста
// let age = prompt("What's your age?", 'Type here your age, pls');

// console.log(`You are ${age} ages old!`)


// //Модальное окно с вопросом
// let isMan = confirm('Are you the man?');
// if (isMan == true){
// 	alert('You are the man!');
// } else {
// 		alert('Go and be the man!');
// };


// //Спросить имя пользователя и сообщить его в консоль
// let askUserName = prompt("What's your name?", '');
// console.log(`Your name is ${askUserName}!`);

// //Упрощенное решение предыдущего алгоритма
// console.log(`Your name is ${prompt("What's your name, man?")}!`);

let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

let str3 = "123";
console.log(`"${str3}" - ${typeof str3}`);

str4 = Number(str3);
console.log(str4 + " - " + typeof str4);

let apples = "2";
let oranges = "5";

console.log(+apples + +oranges);
console.log(Number(apples) + Number(oranges));

let counter = 0;
console.log(counter++);
console.log(counter);


console.log("" + 1 + 0);
console.log("" - 1 + 5);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);

console.log(+"\n0\n" + " - is a " + typeof(+"\n0\n"));

// let askNumber = prompt("Type a number, pls", '');
// let isNumber = +askNumber

// Boolean(isNumber) == false ? console.log("I asked you to type a number and you typed '" + askNumber + "'. Are you retarded?") : console.log("Ok, i've got your number");

// if (isNumber > 0){
// 	console.log(1);
// } else if (isNumber === 0){
// 	console.log(0);
// } else {
// 	console.log(-1);
// };