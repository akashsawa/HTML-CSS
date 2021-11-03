import reactdom from 'react-dom'
var players=(props)=>
{
    const skills=props.skills1;
    const skillslist=skills.map((ele) =>
    {
        return <li>{ele}</li>
    });

    return(
        <div>
        <ol>
            {skillslist}
        </ol>

        </div>
    );
}
export default players;