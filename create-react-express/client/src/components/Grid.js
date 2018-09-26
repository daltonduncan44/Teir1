import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';




export default class Grid extends React.Component{
render(){
   let { players } = this.props
   console.log(players)
      return(
<Container fluid>

    <Row>

    <Col xs="6" sm="4">
    <Table dark >
    
        <thead>
          <tr>
            <th>#</th>
            <th>Position</th>
            <th>Team</th>
            <th>Player</th>
            <th>Teir</th>
            <th>Position Rank</th>
          </tr>
        </thead>
        <tbody>
        {players.map( player =>{
          console.log(player)
          return (

          <tr>
            <th scope="row">1</th>
            <td>{player.Postion}</td>
            <td>{player.Team}</td>
            <td>{player.Player}</td>
            <td>{player.Teir}</td>
            <td>{player.Pr}</td>
          </tr>
          )
          })}
        </tbody>
      </Table>
    </Col>
    <Col xs="6" sm="4">
    <Table dark>
        <thead>
          <tr>
          <th>#</th>
            <th>Position</th>
            <th>Team</th>
            <th>Player</th>
            <th>Teir</th>
            <th>Position Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </Table>
    </Col>
    <Col xs="6" sm="4">
    <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Position</th>
            <th>Team</th>
            <th>Player</th>
            <th>Teir</th>
            <th>Position Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </Table>
    </Col>

    </Row>
    <Row>
    <Col xs="6" sm="4">
    <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Position</th>
            <th>Team</th>
            <th>Player</th>
            <th>Teir</th>
            <th>Position Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </Table>
    </Col>
    <Col xs="6" sm="4">
    <Table dark>
        <thead>
          <tr>
          <th>#</th>
            <th>Position</th>
            <th>Team</th>
            <th>Player</th>
            <th>Teir</th>
            <th>Position Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </Table>
    </Col>
    <Col xs="6" sm="4">
    <Table dark>
        <thead>
          <tr>
          <th>#</th>
            <th>Position</th>
            <th>Team</th>
            <th>Player</th>
            <th>Teir</th>
            <th>Position Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </Table>
    </Col>
 
    </Row>
    
    </Container>
    );
}
}

