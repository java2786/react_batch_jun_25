function readFile(path, func){
    console.log("Reading: "+path)
    func("File data")
}

function writeInFile(path, data){
    console.log("writing: "+data+" in file "+path);
    return "data written"
}

function print(str){
    console.log("Printing: "+str)
    return str;
}

let path = "d:/abc/a.txt"
let res = readFile(path, print)


let myPromise = new Promise(function(resolve, reject){
    if(Date.now()%2==0){
        resolve("Done")
    } else {
        reject("Not done")
    }
})

myPromise.then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err)
})


fetch('https://jsonAAAplaceholder.typicode.com/todos/1')
      .then(function(response) {return response.json()})
      .then(function(json) {console.log(json)})
.then(function () {
    console.log("Demo 1")
}).then(function () {
    console.log("Demo 2")
}).then(function () {
    console.log("Demo 3")
}).then(function () {
    console.log("Demo 4")
}).then(function () {
    console.log("Demo 5")
}).catch(function(error){
    console.log("Error")
})
console.log("ABC")





async function demo(){

    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data = await response.json()
    console.log(data)
}

demo()