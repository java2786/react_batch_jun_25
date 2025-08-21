import Title from "./title";

function TodoList(props){
    console.log(props.todoList)
    return (
        <div>
            <Title title="TodoList" size="20"/>
            {props.todoList.length==0 && 
                <Title title="Empty list" size="16"/> }
            {props.todoList.length>0 && <table>
                <thead>
                    <tr>
                    <th>S.No.</th>
                    <th>Text</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {props.todoList.map(function(todo, index){
                    return (<tr key={index}>
                    <td>{index+1}</td>
                    {todo.completed==false && <td>{todo.text}</td>}
                    {todo.completed==true && <td><del>{todo.text}</del></td>}
                    <td><button onClick={function(){
                        props.deleteHandler(index)
                    }}>Delete</button></td>
                </tr>)
                })}
                </tbody>
            </table>}
        </div>
    );
}
export default TodoList;