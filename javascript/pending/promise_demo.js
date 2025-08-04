console.log("First")
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((resObj)=>{
        resObj.json().then((r)=>{
            console.log(r)
        })
        
      })
      .catch((err)=>{
        console.log("Some error occurred")
        console.log(err)
      })
      
console.log("Last")