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


/************Logical operators************/
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
let height = null;
let width = null;

let area = (height ?? 100) * (width ?? 50); // It's important to use brakets

console.log(area); // 5000


// /************Ternary operator************/

// let getNumber = prompt("Type a number", '');
// console.log(getNumber);

// getNumber === null || getNumber === undefined ?
// console.log(`Aborted`) :

// getNumber === "" || isNaN(+getNumber) ?
// console.log(`"${getNumber}" - not a number. Try again!`) :

// console.log(`I've got your number! It's ${getNumber}`);


// /************Loop "If Else************/

// let year = prompt('What year is ECMAScript-2015?', '');

// if (year < 2015) {
//   console.log( 'Too early...' );
// } else if (year > 2015) {
//   console.log( 'Too late' );
// } else {
//   console.log( 'Bingo!' );
// }