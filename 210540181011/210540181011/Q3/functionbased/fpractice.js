import React from 'react';
const person = (props) => 
{
    let fullname=props.name;
    let details=fullname.split(",");
    return(
       <div>
       <br></br>
       <h3>FirstName: {details[0].toUpperCase()}</h3>
       <br></br>
       <h3>LastName: {details[1].toUpperCase()}</h3> 
       </div>
    );
}
export default person;