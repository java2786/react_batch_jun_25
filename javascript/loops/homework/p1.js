for(let number = 1;number<=10000;number++){
    // 153 = 1³+5³+3³

// step1: count digits in number
// step2: each digit ^ count and sum all
// step3: compare it output is same as original

    // let number = 153
    let num = number;

    let count = 0;

    while(num>0){
        // count++;
        count = count + 1;
        num = parseInt(num/10);
    }
    num = number;

    // console.log(count);
    // console.log(num);

    let sum = 0;
    while(num>0){
        sum = sum + Math.pow(num%10, count);
        num = parseInt(num/10);
    }

    // console.log(`Sum is ${sum}`);

    if(sum == number){
        console.log(`${number} is armstrong number`)
    }
}