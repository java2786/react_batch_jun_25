// functional component
function Title(props){
    const styleObj = {
        fontWeight: props.bold=="true"?"bold":"", 
        fontSize: props.size+"px",
        textDecoration: "underline"
    };
    return(
        <p style={styleObj}>{props.title}</p>
    );
}
export default Title;