// Check if a number is a strong number (sum of factorials of digits = original number).

    let fact = 1;
    for(let n = 1;n<=num;n++){
        fact = fact * n;
    }
    console.log(`Factorial of ${num} is ${fact}`);


