import { Component } from "react";
import { createRoot } from "react-dom/client";

// functional component
function Title(props){
    return(
        <h1>{props.title}</h1>
    );
}

// class based component
class Footer extends Component {
    render(){
        return(
            <p>&copy; demo</p>
        );
    }
}
createRoot(document.getElementById("root")).render(
    <div>
        <Title title="Demo" />
        <Footer/>
    </div>
)