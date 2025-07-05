// loops -> cycle -> repeat 

// print numbers from 1 to N
// print month name from given number e.g. 3 -> March
// print table of N

// num = 5;
// var num = 5;
let num = 5;
let i = 1;
while(i<=num){
    console.log(i);
    i = i + 1;
}
console.log("done")


for(let j = 1;j<=num;j = j + 1){
    console.log(j);    
}



let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

let input = parseInt(prompt("Enter a month number"))

if(input < 12 && input >=0){
    months[input-1]
} else {
    console.log("Out of range");
}

for(let i=0;i<months.length;i++){
    console.log(months[i]);
}