import React, { Component } from 'react';

class form1 extends Component
{
    constructor()
    {
      super()
      this.state={firstname:'',lastname:'',showdata:false}
      this.inputhandler=this.inputhandler.bind(this)
      this.submithandler=this.submithandler.bind(this)
    }
  
    inputhandler = (event) => 
    {
      const {name,value}=event.target
      this.setState({[name]:value})
      
    }
    submithandler = (event) =>
    {
      event.preventDefault()
      this.setState({showdata:true})
      console.log(this.state.firstname+" "+this.state.lastname)    
    }
  
    render()
    {
      return(
        <div id="myform">
          <form>
              <table>
                  <tr>
                      <td>FirstName :</td>
                      <td><input name="firstname" onChange={this.inputhandler}/></td><br></br><br></br>
                  </tr>
                  <tr>
                      <td>LastName :</td>
                      <td><input name="lastname" onChange={this.inputhandler}/></td>
                  </tr>
              </table>
            <br></br>
            <button onClick={this.submithandler}>Submit</button>
          </form>   
          {this.state.showdata && <p>{this.state.firstname} {this.state.lastname}</p>}       
        </div>
      );
    }
}
export default form1;


