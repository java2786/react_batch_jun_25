function show(name) {
    console.log(`Hey ${name}, how are you?`);
}

let show = function (name) {
    console.log(`Hey ${name}, how are you?`);
}

let show = (name)=> {
    console.log(`Hey ${name}, how are you?`);
}


function myFunction(func, name){
    func(name)
}

myFunction(show, "Ramesh")