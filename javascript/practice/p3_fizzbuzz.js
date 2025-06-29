function fizzbuzzgame(num){
    let results = [];
    for(let n=1;n<=num;n++){
        if(n%3==0 && n%5==0){
            // console.log("FizzBuzz");
            results.push("FizzBuzz")
        } else if(n%3==0){
            // console.log("Fizz");
            results.push("Fizz")
        } else if(n%5==0){
            // console.log("Buzz");
            results.push("Buzz")
        } else {
            // console.log(n);
            results.push(`${n}`)
        }
    }
    return results;
}

console.log(fizzbuzzgame(30))