function addTodo(){
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

    let todoContainer = document.getElementById("todo-container");
    todoContainer.appendChild(inputContainer)

}