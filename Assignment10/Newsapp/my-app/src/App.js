import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Newsapp from'./Newsapp/Newsapp.js'     //FOR QUESTION NO. 1
//import Q2 from'./Q2/Q2.js'                    //FOR QUESTION NO. 2 & 3
//import Empdata from "./Empdata/Empdata.js"    //FOR QUESTION NO. 4
//import Skillslist from"./Skillslist/Skillslist.js"   //FOR QUESTION NO. 5
//import Form from"./Form/Form.js"              //FOR QUESTION NO. 7
//import Player from './Player/Player.js';        //FOR QUESTION NO. 8
class App extends Component {

  /*
  state=                                   //FOR QUESTION NO. 4
  {

    Empdata:
    [
      {
        empid:"1225",ename:"AKASH", salary:"10000"
      },
      {
        empid:"1336",ename:"SAGAR", salary:"40000"
      },
      {
        empid:"4778",ename:"VIJAY", salary:"60000"
      }
    ],
    showemp:"true"
  }
  */
   



  /* 
  state=                                                     //FOR QUESTION NO. 2 & 3
  {
    news : 
    [
      { 
        title:"Prime Minister Narendra Modi Centre to take over vaccine procurement from States, provide free for 18-44 age group ",
        body:"Prime Minister Narendra Modi addressed the nation at 5 p.m. on Monday, hours after announcing the same on Twitter. In a speech that lasted close to 35 minutes, the PM primarily focused on Indias new vaccine strategy. He said the Centre, after observing developments during the deadly second wave of infections, has decided to once again." 
      },
      {
        title:"Coronavirus | More anti-bodies produced by Covishield than Covaxin, says study ",
        body:"Two doses of Covishield vaccine produced more antibodies than Covaxin doses, but there were relatively fewer instances of ‘breakthrough infections’ after the latter, reports a study of healthcare workers (HCW) in India."
      },
      {
        title:"Taxing times for Kerala’s police force ",
        body:"As reports of a brutal attack on a police officer at Marayur in Idukki district while enforcing the COVID-19 protocol came out on the morning of June 1, the incident momentarily threatened to be the last straw for an already stretched force that has been in the front line of the fight against the pandemic. "
      }


    ]
  }

  */

  /*

  state=                                                       //FOR QUESTION NO. 7
  {
    mame:" ",
    name:" ",
      name1:" ",
      name2:" "    
  }
  btnHandler1=(event)=>
  {
     this.setState
     (
       {name:event.target.value}
     )
  }

  btnHandler2=(event)=>
  {
     this.setState
     (
       {mame:event.target.value}
     )
  }
  
  inHandler=() =>
  {
    this.setState
    (
       {
         name1:this.state.name,
         name2:this.state.mame
       }
    )
  }
 */
 
  

  render() {
 
    /*
    let empdata=null;                                    //FOR QUESTION NO. 4
    if(this.state.showemp)   //JAVASCRIPT WAY
    {
       empdata=  
       (
         this.state.Empdata.map ((emp) =>
           {
           return (
             <Empdata id={emp.empid} 
                      name={emp.ename}
                      salary={emp.salary} >

             </Empdata> 
             )
             
           })
        
       );
    }
   */
   
    /*
    const skills=["NodeJS","ReactJS","Mongo DB","Angular 10"];        /FOR QUESTION NO.5
    */

    return (
      <div className="App">

        
          <h1>THE INDIAN EXPRESS </h1>
        
          <Newsapp></Newsapp>     { /*/FOR QUESTION NO. 1 */}
         

       {/*
        <Q2 title={this.state.news[0].title}
            body={this.state.news[0].body} />
        <Q2 title={this.state.news[1].title}
            body={this.state.news[1].body} />
        <Q2 title={this.state.news[2].title}
            body={this.state.news[2].body} />     //FOR QUESTION NO. 2 & 3
       */}

       {/*

       <h1 align="left">EMPLOYEE DATA</h1>      //FOR QUESTION NO. 4
       <table border="2px" width="80%">
            {empdata}
      </table>


       */}

       {/*
        <Skillslist skills={skills}/>     //FOR QUESTION NO.5   
       */}
      

      {/*                                 //FOR QUESTION NO. 7

      FIRST NAME:<input type="text" value={this.state.name} onChange={this.btnHandler1}></input> <br></br><br></br>
      LAST NAME:<input type="text" value={this.state.mame} onChange={this.btnHandler2}></input><br></br><br></br>
      <button onClick={this.inHandler}>SUBMIT</button><br></br><br></br>
      <Form name3={this.state.name1}
            name4={this.state.name2}></Form>  

      */}

      { /*<Player></Player> */} {/* FOR QUESTION NO. 8  */}
      </div> 
    );
  }
}
export default App;
