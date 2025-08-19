import Footer from "./Footer";
import Title from "./title";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
    return (
        <div>
            <Title title="Props & State Demo" size="36" bold="true" />
            <TodoForm />
            <TodoList />
            <Footer />
        </div>
    );
}

export default App;
