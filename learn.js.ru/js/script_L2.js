"use strict";

// /************Objects************/

// const user = {
// 	name: "Tolya",
// 	age: 33,
// };
// console.log(user);

// user.admin = true;
// console.log(user);

// user["sex-identify"] = "man";
// console.log(user);

// delete user.sex;
// console.log(user);


// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// console.log(`You should buy: "${fruit} - ${bag.apple} qty"`);


// /************Shorthand************/
// function makeUser(name, age) {
//   return {
//     name, // same as name: name,
//     age   // same as age: age,
//   };
// }

// const user = makeUser("Tolya", 33);
// console.log(user.name); // Tolya


// /************"In" to check values in object************/
// const user = {
// 	name: "Tolya",
// 	age: 33,
// };

// const rights = "admin";
// user[rights] = true;

// console.log("name" in user);
// console.log("admin" in user);
// console.log(user.name + " is " + rights);


// /************"For..in" in object************/

const user = {
	name: "Tolya",
	age: 33,
};

for (let key in user) {
	console.log(key);
	console.log(user[key]);
}


const codes = {
  "+49": "Германия",
  "+41": "Швейцария",
  "+44": "Великобритания",
  // ..,
  "+1": "США"
};

for (let code in codes) {
  console.log(+code);
}