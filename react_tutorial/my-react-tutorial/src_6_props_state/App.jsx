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

    
    return (
        <div>
            <Title title="Props & State Demo" size="36" bold="true" />
            <TodoForm />
            
            <TodoList todoList={todos} />
            <Footer />
        </div>
    );
}

export default App;
