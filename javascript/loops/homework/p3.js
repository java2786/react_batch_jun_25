// Check if a number is a strong number 
// // (sum of factorials of digits = original number).

function show(name) {
    console.log(`Hey ${name}, how are you?`);
}

function getFactorial(num) {
    let fact = 1;
    for (let n = 1; n <= num; n++) {
        fact = fact * n;
    }
    // console.log(`Factorial of ${num} is ${fact}`);
    return fact;
}

for (let number = 0; number <= 100000; number++) {
    // let number = 456;
    let num = number;
    let result = 0;

    while (num > 0) {
        result = getFactorial(num % 10) + result;
        num = parseInt(num / 10);
    }

    // console.log(result);
    if (number == result) {
        console.log(`${number} is strong number.`)
    }
    //  else {
    //     console.log(`${number} is not a strong number.`)
    // }
}