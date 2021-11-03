import React, { Component } from 'react';

class player extends Component{

    constructor()
    {
        super()
        this.state={playername:"",playerslist:["Dhoni","Yuvraj"]}
        this.addplayer=this.addplayer.bind(this)
        this.inputchangehandler=this.inputchangehandler.bind(this)
        this.deleteplayer=this.deleteplayer.bind(this)
        this.deleteplayers=this.deleteplayers.bind(this)

    }

    addplayer = (event) =>
 {
   this.setState(
    {
        playerslist:this.state.playerslist.concat([this.state.playername])
    })
    console.log(this.state.playername+this.state.playerslist) 
 }

 inputchangehandler= (event) => {
  this.setState({playername:event.target.value});
 }

 deleteplayer = (event) =>
 {
   this.setState({
    playerslist:this.state.playerslist.filter((ele)=>ele!==this.state.playername)
   })
 }

 deleteplayers = (event) =>
 {
   this.setState({
    playerslist:[]
   })
 }

  render()
  {
    return (
      <div className="myform">
          <h2>Cricket Players</h2>  
                <ol>
                  {this.state.playerslist.map(ele=>
                  {
                    return (<li key={Math.random()}>{ele}</li>)
                  })}
                </ol>           
                Player Name : <input type="text" onChange={this.inputchangehandler}></input>
                <br></br><br></br>
                <button  onClick={this.addplayer}>Add Player</button>
                <br></br><br></br>
                <button  onClick={this.deleteplayer}>Delete Player</button>
                <br></br><br></br>
                <button  onClick={this.deleteplayers}>Delete Players</button>
          
      </div>
    );
  }
}
export default player;