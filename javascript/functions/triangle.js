function printTriangle(rows){
    for(let i=1;i<=rows;i++){
        let stars = "";
        for(let j=1;j<=i;j++){
            stars = stars + "* "
        }
        console.log(stars);
    }
}