"use strict";

// let ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask(
// 	"Will you play with me?",
// 	function() {console.log("Go and play together!");},
// 	function() {console.log("Why you don't wanna play with me?");}
// );

let question = prompt("What's your question?");

let ask = (confirm(question)) ?
	() => console.log("I'm happy you agreed!") :
	() => console.log("Sadly you declined.");

ask();