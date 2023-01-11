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


function makeUser(name, age) {
  return {
    name, // same as name: name,
    age   // same as age: age,
  };
}

const user = makeUser("Tolya", 33);
console.log(user.name); // Tolya