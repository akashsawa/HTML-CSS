import reactDom from "react-dom"
import "./news.css";
var person = (props) =>
{
   return (
       <table>
        
        <span className="news" >
            <table border="2px" width="500px" height="100px" padding="5px">
            <h3 align="left" className="news1">{props.title}</h3>
            <ul>
                <li align="left"> {props.body}</li>
            </ul>
            </table> &nbsp;
        </span> 
        &nbsp;
      </table>

    );
}
export default person;