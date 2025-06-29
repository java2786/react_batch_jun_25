// swap

let a = 5;
let b = 3;

// using third variable
/*
let temp = a;
a = b;
b = temp;
*/

// without using third variable
// a = a+b;
// b = a-b;
// a = a-b;
a = a*b;
b = a/b;
a = a/b;

console.log(a) // 3
console.log(b) // 5