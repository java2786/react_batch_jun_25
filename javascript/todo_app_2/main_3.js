function addTodo() {
    let todoText = document.getElementById("input-box").value;
    document.getElementById("input-box").value = "";

    let priority = document.getElementById("priority").value;
    console.log(priority)
    
    if(todoText!=""){
        renderTodo(todoText, priority);
    }
}


function renderTodo(text, priority) {
    /*
    <div class="todo">
                <div><input type="checkbox"></div>
                <p>Create js app</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>



    <div><input type="checkbox"></div>
    */
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    let inputContainer = document.createElement("div");
    inputContainer.appendChild(inputElement);

    let todo = document.createElement("div");
    todo.classList.add("todo")
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
    todo.appendChild(deleteBtn);


    let todoContainer = document.getElementById("todo-container");
    todoContainer.appendChild(todo)
}