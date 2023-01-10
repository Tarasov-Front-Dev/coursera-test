"use strict"

// /************Hello World************/

// alert("Hello World!");


// /************First variables************/

// let name = 'Jone',
// 		admin = name;
// console.log(`Hello, ${admin}!`);


// /************Typeof************/

// console.log(typeof "foo"); // String
// console.log(typeof 0); // Number
// console.log(typeof 10n); // Bigint
// console.log(1/0); // Infinity
// console.log(-1/0); // -Infinity
// console.log(+"123z"); // NaN
// console.log(typeof true); // Boolean
// console.log(typeof Symbol("id")); // Symbol
// console.log(typeof null); //object (is a mistake of JS)
// console.log(typeof undefined); // undefined
// console.log(typeof console); // object
// console.log(typeof console.log); // function (method)


// /************Modals************/

// //Модальное окно с вопросом и полем для ввода текста
// let age = prompt("What's your age?", 'Type here your age, pls');
// console.log(`You are ${age} ages old!`)


// //Модальное окно с вопросом + модальное окно с сообщением
// let isMan = confirm('Are you the man?');
// if (isMan == true){
// 	alert('You are the man!');
// } else {
// 		alert('Go and be the man!');
// };


// /************Minimize code************/

// /***Get userName and console it***/

// let askUserName = prompt("What's your name?", '');
// console.log(`Your name is ${askUserName}!`);

// /***Minimize code***/

// console.log(`Your name is ${prompt("What's your name, man?")}!`);

// /***Concatenation***/
// console.log("Nice to meet you " + prompt("What's your name, dear cousin?", '') + "!");


// /************Variables types************/

let a = 1;
console.log(typeof Boolean(a)); // toBoolean
console.log(typeof !!a); // toBoolean

let value = String(a);
console.log(typeof value); // String

let str3 = "123";
console.log(str3 + " - " + typeof str3); // String

let str4 = Number(str3);
console.log(str4 + " - " + typeof str4); // Number

let apples = "2";
let oranges = "5";

console.log(+apples + +oranges); // toNumber
console.log(Number(apples) + Number(oranges));

let counter = 3;
console.log(counter++); // postfix increment
console.log(counter);

console.log(--counter); // postfix decrement
console.log(counter);


///////////////////////////////////////


// console.log("" + 1 + 0);
// console.log("" - 1 + 5);
// console.log(true + false);
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log("  -9  " + 5);
// console.log("  -9  " - 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log(" \t \n" - 2);

// console.log(+"\n0\n" + " - is a " + typeof(+"\n0\n"));


///////////////////////////////////////


// let askNumber = prompt("Type a number, pls", '');

// console.log(askNumber);

// askNumber == null ? console.log(`Stupid son of a bitch. If you want to continue, type a number, retard.`) : askNumber >=0 ? console.log(`I've got your number! It's ${askNumber}!`) : console.log(`Are you retarded? I asked you to type a number and you typed '${askNumber}'??`);


// if (isNumber > 0){
// 	console.log(1);
// } else if (isNumber === 0){
// 	console.log(0);
// } else {
// 	console.log(-1);
// };