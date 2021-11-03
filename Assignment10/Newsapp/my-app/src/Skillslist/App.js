import React,{Component} from 'react';
import './App.css';
import SkillListComponent from './SkillListComponent/SkillListComponent';
import './SkillListComponent/Skills.css'
class App extends Component {
  render()
  { 
    const skills=["NodeJS","ReactJS","Mongo DB","Angular 10"];
    return (
      <div className="App">
        <SkillListComponent skills={skills}/>
      </div>
    );
  }
}

export default App;
