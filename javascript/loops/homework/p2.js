// Convert a decimal number to binary manually 

let num = 6;
let result = "";
while(num>0){
    result = (num%2) + result;
    num = parseInt(num/2);
}

console.log(result);