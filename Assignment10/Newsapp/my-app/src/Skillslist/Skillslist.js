import reactDom from "react-dom"

var skillslist = (props) =>
{
    const skills=props.skills;
    const skillslist=skills.map((ele)=>{
        return <li>{ele}</li>
    });

    return(
        <ol>
            {skillslist}
        </ol>
    );

}
export default skillslist;