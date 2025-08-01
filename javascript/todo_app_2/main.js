let todos = [
    {text: "One", priority: "low"}, 
    {text: "Two", priority: "high"}
]

renderTodos();

function addTodo() {
    let todoText = document.getElementById("input-box").value;
    document.getElementById("input-box").value = "";

    let priority = document.getElementById("priority").value;
    console.log(priority)
    
    if(todoText!=""){
        // renderTodo(todoText, priority);
        todos.push({text: todoText, priority: priority})
        console.log(todos)
        renderTodos();
    }
}

function renderTodos(){
    document.getElementById("todo-container").innerText = ""
    for(let i=0;i<todos.length;i++){
        let text = todos[i].text;
        let priority = todos[i].priority;
        renderTodo(text, priority, i)
    }
}


function renderTodo(text, priority, index) {
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    let inputContainer = document.createElement("div");
    inputContainer.appendChild(inputElement);

    let todo = document.createElement("div");
    todo.classList.add("todo")
    todo.id = "todo"+index
    todo.appendChild(inputContainer);


    let para = document.createElement("p");
    para.innerText = text;
    para.classList.add(priority)
    todo.appendChild(para);

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    todo.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function(event){
        
        // console.log(event.target.parentNode)
        // event.target.parentNode.classList.add("animate")
        
        let todoElement = document.getElementById("todo"+index);
        console.log(todoElement)
        todoElement.classList.add("animate")
        
        deleteTodo(index);
    })
    todo.appendChild(deleteBtn);


    let todoContainer = document.getElementById("todo-container");
    todoContainer.appendChild(todo)
}

function deleteTodo(i){
    console.log("Index: "+i);
    console.log(todos)
    // delete where index is i

    todos.splice(i,1);

    console.log(todos)
    renderTodos();
}