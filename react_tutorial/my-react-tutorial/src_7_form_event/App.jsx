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
    const deleteTodo = function(index){
        const newTodos = []
        for(let i=0;i<todos.length;i++){
            if(i!==index){
                newTodos.push(todos[i])
            }
        }
        setTodos([...newTodos])
    }

    const addTodo = function(input){
        console.log("input: "+input);
        const newTodo = {text: input, completed: false}
        // todos.push(newTodo)
        setTodos([...todos, newTodo])
    }
    
    return (
        <div>

            <Title title="Props & State Demo" size="36" bold="true" />
            <TodoForm hander={addTodo}/>
            
            <TodoList deleteHandler={deleteTodo} todoList={todos} />
            <Footer />
        </div>
    );
}

export default App;
