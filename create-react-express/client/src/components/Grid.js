import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';



export default class Grid extends React.Component{
render(){

   let { players, getAllQuarterBacks, getAllRB, getAllWR, getAllDEF, getAllTE, getAllPL, addToMyTeam, addToDrafted} = this.props
   //console.log(players)



      return(
<Container fluid>

    <Row>

    <Col className="playerTable">
    <ButtonGroup>
        <Button onClick={getAllPL}>All</Button>
        <Button onClick={getAllQuarterBacks}>QB</Button>
        <Button onClick={getAllRB}>Rb</Button>
        <Button onClick={getAllWR}>Wr</Button>
        <Button onClick={getAllTE}>Te</Button>
        <Button onClick={getAllDEF}>Def/K</Button>
      </ButtonGroup>
     
    <Table dark >
    
        <thead>
          <tr>
            
            <th>Player</th>
            <th>Team</th>
            <th>Position</th>
            <th>Tier</th>
            <th>Position Rank</th>
            <th>Add To Your Team</th>
            <th>Player Was Drafted</th>
          </tr>
        </thead>
        <tbody>
        {players.map( player => {
          //console.log(player._id)
          return (

          <tr key={player._id}>
            
            <td>{player.Player}</td>
            <td>{player.Team}</td>
            <td>{player.Position}</td>
            <td>{player.Teir}</td>
            <td>{player.Pr}</td>
            <td><Button onClick={()=>addToMyTeam(player.Player)} color="success"  >My Team</Button>{' '}</td>
            <td><Button onClick={()=>addToDrafted(player.Player)} color="danger">Taken</Button>{' '}</td>
          </tr>
          )
          })}
        </tbody>
      </Table>
      
    </Col>
  
    </Row>
    
    </Container>
    
    );
}
}