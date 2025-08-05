// function getOrder(){
//     setTimeout(function(){
//         console.log("take order")
//     }, 0);
// }

// function prepare(item, count){
//     setTimeout(function(){
//         console.log("Prepare "+samose)
//     }, 0);
// }

// function serve(){
//     setTimeout(function(){}, 0);
// }

getOrder(function(item){
    prepare(item, function(){
        serve(function(dish){
            console.log("dish ready")
        })
    })
})

// promise 
getOrder()
    .then(function(item){ return prepare(item)})
    .then(function(dish){console.log("Dish is ready")})
    .then(function(){console.log("Ask for bill")})
    .catch(function(err){console.log(err)})

async function myfunc(){
    order = await getOrder()
    dish = await prepare(order)
    await serve(dish)
}