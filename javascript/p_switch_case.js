// Input day number (1 to 7) and 
// print the corresponding day using switch-case.

let n = 5;

if(n==1 || n==2 ||n==3 ||n==4 || n==5){
    console.log("Weekday")
}

if(n>0 && n<6){
    console.log("Weekday")
}


switch(n){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("weekday");
        break;
    case 6:
    case 7:
        console.log("weekend");
        break;
    default:
        console.log("invalid")
}

