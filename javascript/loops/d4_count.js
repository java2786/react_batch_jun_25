// Count the number of digits in an input number.

let num = 253;

let count = 0;

while(num>0){
    count = count + 1;
    num = parseInt(num / 10);
}

console.log(count)