// Sum all digits of a 3 digit number.

let num = 2564;

let sum = 0;

// sum = sum + (num%10);
// num = parseInt(num/10);
// console.log(sum)

// sum = sum + (num%10);
// num = parseInt(num/10);
// console.log(sum)

// sum = sum + (num%10);
// num = parseInt(num/10);
// console.log(sum)

// sum = sum + (num%10);
// num = parseInt(num/10);
// console.log(sum)

while(num > 0){
    sum = sum + (num%10);
    num = parseInt(num/10);
}

console.log(sum)