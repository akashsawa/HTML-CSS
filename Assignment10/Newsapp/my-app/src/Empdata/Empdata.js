import reactDom from "react-dom"

var empdata = (props) =>
{
   return (
    
    
    <tr>
      <td>{props.id}</td><td>{props.name}</td><td>{props.salary}</td>
    </tr>
      
    );
}
export default empdata;