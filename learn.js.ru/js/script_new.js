"use strict";

let getUserName = prompt("Login?", "");
let getPassword;

if (getUserName === "admin") {

	getPassword = (prompt("Password?", ""));

	if (getPassword === "boss") {
		console.log("Hello!");
	} else if (getPassword === null || getPassword === "") {
		console.log("Aborted");
	} else {
		console.log("Wrong password");
	}
} else if (getUserName === null || getUserName === "") {
	console.log("Aborted");
	} else {
		console.log("Wrong UserName");
}