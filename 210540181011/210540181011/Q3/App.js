import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './functionbased/fpractice';
//import StatefulComponent from './classbased/practice';


class App extends Component 
{
  state=
  {
    name:"Anil,patil"
  }

  render() 
  {
    return (
      <div className="App">
       <Person name={this.state.name}/>
      </div>
    );
  }
}





export default App;
