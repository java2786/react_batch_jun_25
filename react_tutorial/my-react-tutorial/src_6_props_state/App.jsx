import { useState } from "react";
import Footer from "./Footer";
import Title from "./title";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
    const [todos, setTodos] = useState([
        {text: "Learn react", completed: false},
        {text: "Pay bill", completed: true}
        
    ]) 

    function addTodo(text){
        todos.push({text: text, completed: true})
        console.log(todos)
        setTodos([...todos])
    }
    return (
        <div>
            <Title title="Props & State Demo" size="36" bold="true" />
            <TodoForm handler={addTodo} />
            {/* <button onClick={function(){
                addTodo("Do excercise")
            }}>Add</button> */}
            <TodoList todoList={todos} />
            <Footer />
        </div>
    );
}

export default App;
