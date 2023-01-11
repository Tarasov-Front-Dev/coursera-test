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
// if (isMan){
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

// let a = 1;
// console.log(typeof Boolean(a)); // toBoolean
// console.log(typeof !!a); // toBoolean

// let value = String(a);
// console.log(typeof value); // String

// let str3 = "123";
// console.log(str3 + " - " + typeof str3); // String

// let str4 = Number(str3);
// console.log(str4 + " - " + typeof str4); // Number

// let apples = "2";
// let oranges = "5";

// console.log(+apples + +oranges); // toNumber
// console.log(Number(apples) + Number(oranges));

// let counter = 3;
// console.log(counter++); // postfix increment
// console.log(counter);

// console.log(--counter); // postfix decrement
// console.log(counter);


// /************Basic operators************/

// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
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

// let a = +"\n0\t";
// console.log(a + " - is a " + typeof(a));


// /************Logical operators************/
// console.log( console.log(1) && console.log(2) ); // 1 and then undefined
// console.log( null || 2 && 3 || 4 ); // 3


// let getUserName = prompt("Login?", "");
// let getPassword;

// if (getUserName === "admin") {

// 	getPassword = (prompt("Password?", ""));

// 	if (getPassword === "boss") {
// 		console.log(`Hello ${getUserName}!`);
// 	} else if (getPassword === null || getPassword === "") {
// 		console.log("Aborted");
// 	} else {
// 		console.log("Wrong password");
// 	}
	
// } else if (getUserName === null || getUserName === "") {
// 	console.log("Aborted");
// 	} else {
// 		console.log("Wrong login");
// }


// /************Nullish coalescing operator************/
// let height = null;
// let width = null;

// let area = (height ?? 100) * (width ?? 50); // It's important to use brakets

// console.log(area); // 5000


// /************Ternary operator************/

// let getNumber = prompt("Type a number", '');
// console.log(getNumber);

// getNumber === null || getNumber === undefined ?
// console.log(`Aborted`) :

// getNumber === "" || isNaN(+getNumber) ?
// console.log(`"${getNumber}" - not a number. Try again!`) :

// console.log(`I've got your number! It's ${getNumber}`);


// /************Loop If-else************/

// let year = prompt('What year is ECMAScript-2015?', '');

// if (year < 2015) {
//   console.log( 'Too early...' );
// } else if (year > 2015) {
//   console.log( 'Too late' );
// } else {
//   console.log( 'Bingo!' );
// }


// /*********Loop While, If, For + continue/break*********/
// let sum = 0;

// while (true) {
// 	let value = prompt("Type a number to summ. Push 'Cancel' to stop", "");
// 	if (value === null) break;
// 	if (value === undefined || isNaN(value) || value === ""){
// 		alert(`"${value}" is not a number! Try again.`);
// 		continue;
// 	};
// 	sum += +value;
// }
// console.log(`Your sum is ${sum}.`);

// // /*********GetPrimes*********/

// let maxPrime = +prompt("Set max number to prime", "");
// console.log("Here is all primes toward " + maxPrime + ":");

// label: for (let i = 2; i < maxPrime; i++){
// 	for (let j = 2; j < i; j++){
// 		if (i % j === 0) {
// 			continue label;
// 		}
// 	}
// 	console.log(i);
// }


// /*********Switch*********/

// let getBrowserName = prompt("What's your browser?", "");

// switch(getBrowserName){
// 	case "Edge":
// 		console.log("You've got the Edge!");
// 		break;
// 	case "Chrome":
// 	case "Mozilla":
// 	case "Safari":
// 	case "Opera":
// 		console.log("Ok we support these browsers too");
// 		break;
// 	default:
// 		console.log("We hope this page looks ok!");
// }


// /*********Functions*********/

// function checkAge(age) {
// 	if (age >= 18) {
// 		return true;
// 	} else {
// 		return confirm("Ask parents");
// 	}
// }

// /***Or like this***/

// function checkAge(age) {
// 	return (age >= 18 || confirm("Ask parents"));
// }

// let age = +prompt("What's your age?", "");

// if (checkAge(age)) {
// 	console.log("Access granted!");
// } else {
// 	console.log("Access denied");
// }


// /*********isPrime by functions*********/

// function showPrimes(n) {
// 	for (let i = 2; i < n; i++){ // count all numbers towards maxPrime
// 		if (!isPrime(i)) continue;
// 		console.log(i); // isPrime
// 	}
// }

// function isPrime(n) {
// 	for (let i = 2; i < n; i++){ // count all dividers
// 		if (n % i === 0) return false; // check for not primes
// 	}
// 	return true;
// }

// let maxPrime = +prompt("Set max number to prime", "");
// showPrimes(maxPrime);


// /*********Function Expression*********/

// let sayHi = function(userName) { // create function expression
// 	userName = userName || "Anonim";
//   console.log("Hello " + userName + "!");
// };

// let name = prompt("What's your name?", "");
// let func = sayHi; // copy function sayHi to variable func.

// func(name); // call function


// /*********Callback Functions*********/

// const ask = function (question, yes, no){
// 	if (confirm(question)) yes()
// 	else no();
// };

// let userQuestion = prompt("What's your question?", "");
// if (userQuestion) {
// 	ask(
// 		userQuestion,
// 		function () {console.log("You agreed!")},
// 		function () {console.log("You declined!")}
// 	);
// } else console.log("Aborted");


// const age = prompt("How old are you?", "");

// const showGreeting = (age < 18) ?
// 	function () {console.log("Hi!")} :
// 	function () {console.log("Hello!")};

// showGreeting();


// /*********Arrow Functions*********/

// const age = prompt("How old are you?", "");

// const showGreeting = (age < 18) ?
// () => console.log("Hi!") :
// () => console.log("Hello!");

// showGreeting();