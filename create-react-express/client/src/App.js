import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Jumbo from "./components/Jumbotron";
import Grid from "./components/Grid";
import API from "./utils/API.js"

//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Requiring our dependencies

class App extends Component{
//set initial state for the player data
state = {
 
  players:[],
  position: '',
  team: '',
  player:'',
  tier:0,
  positionalRank:0
};

//Component did mount that calls the controller method
componentDidMount() {
  this.getAllPlayers(); 

}


//This should retrieve the player from the 
// getPlayers = () => {
//   API.getPlayers({
//     position: this.state.position,
//     team: this.state.team,
//     player:this.state.player,
//     tier:this.state.tier,
//     positionalRank:this.state.positionalRank
//   })
//     .then(res =>
//       this.setState({
//          position: res.position,
//          team:res.team,
//          player:res.player,
//          tier:res.tier,
//          positionalRank:res.positonalRank,
//          message: !res.data.length
//           ? "No New Articles Found, Try a Different Query"
//           : ""
//       })
//     )

//     .catch(err => console.log(err));
// };
getAllPlayers = () => {

  API.getPlayers()
    .then (res =>{
      console.log(`Response ${res}`);
      this.setState({players: res.data})
    }
     
      )
  .catch(err => console.log(err));
    
};
getAllPL = () => {

  API.getAll()
    .then (res =>{
      console.log(`Response ${res}`);
      this.setState({players: res.data})
    }
     
      )
  .catch(err => console.log(err));
    
};

getAllQuarterBacks = ()=> {
  API.getQuarterbacks()
    .then (res =>{
      console.log(`Response ${res}`);
      this.setState({players: res.data})
    }
     
      )
  .catch(err => console.log(err));
    
}
getAllRB = ()=>{
  API.getRunning()
  .then (res =>{
    console.log(`Response ${res}`);
    this.setState({players: res.data})
  }
   
    )
.catch(err => console.log(err));
}
getAllWR = ()=>{
  API.getRecever()
  .then (res =>{
    console.log(`Response ${res}`);
    this.setState({players: res.data})
  }
   
    )
.catch(err => console.log(err));
}
getAllDEF = ()=>{
  API.getDEF()
  .then (res =>{
    console.log(`Response ${res}`);
    this.setState({players: res.data})
  }
   
    )
.catch(err => console.log(err));
}

getAllTE = ()=>{
  API.getTE()
  .then (res =>{
    console.log(`Response ${res}`);
    this.setState({players: res.data})
  }
   
    )
.catch(err => console.log(err));
}
  render()
  {
    console.log(this.state.players)
    return (
      <div>
        <Jumbo/>
        <Nav/>
        {/* Pass the data down as props to the grid */}
        {/* <Grid  position= {position} team = {team} player = {player} teir = {teir}  /> */}
        <Grid players ={this.state.players} getAllQuarterBacks = {this.getAllQuarterBacks} getAllRB ={this.getAllRB} getAllWR={this.getAllWR} getAllDEF={this.getAllDEF} getAllTE={this.getAllTE} getAllPL={this.getAllPL}/>
      </div>
   );
  }
};

export default App;
