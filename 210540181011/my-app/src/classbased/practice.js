import React, {Component} from 'react';

class StatefulComponent extends Component
{
    constructor(){
        super()
        this.add=this.add.bind(this);
    }
 add=(e)=>{
   var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    var sum=(num1+num2);
    document.getElementById("result").innerHTML=sum;
 }
     render(){
 
         return(
             <div>
             Number1:<input type="text" id="num1"/><br/>
             Number2:<input type="text" id="num2"/><br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <button id="add"  onClick={this.add}>Add</button><br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <span id="result"></span>
     </div>
         )
     }
}
export default StatefulComponent;