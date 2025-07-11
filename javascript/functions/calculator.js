// let a = 5;
// let b = 3;

// console.log(`${a} + ${b} = ${a+b}`);


function add(a, b){
    return a+b;
}

function mul(a, b){
    return a*b;
}

console.log(`${a} + ${b} = ${add(5, 2)}`);


// ========

function add(...nums){
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum = sum + nums[i];
    }
    return sum;
}

add(3,2)
add(3,4,5)
add(2,3,4,5,6,7,8,2,3,4,5)