"use strict";

// /************Objects************/

const user = {
	name: "Tolya",
	age: 33,
};
console.log(user);

user.admin = true;
console.log(user);

user["sex-identify"] = "man";
console.log(user);

delete user.sex;
console.log(user);


let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};

console.log(`You should buy: "${fruit} - ${bag.apple} qty"`);