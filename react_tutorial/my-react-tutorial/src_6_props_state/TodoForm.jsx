import Title from "./title";

function TodoForm(props){
    const outerStyle = {
        border: "1px solid black",
        padding: "5px"
    }
    return (
        <div style={outerStyle}>
            <Title title="Todo Form" size="18"/>
            <form action="">
                <label>Todo</label> : <input type="text" placeholder="Enter your task"/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;