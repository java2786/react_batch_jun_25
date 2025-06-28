// Take name and age as input and print them in a sentence.

let name = prompt("Enter your name");
let age = prompt("Enter your age");

let message = "";
// condition -> conditional operators
if(age>=18){
    message = "valid";
} else {
    message = "invalid";
}

console.log(`Hi ${name} you are ${age} years old and you are ${message} for vote.`)