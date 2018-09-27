
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand,  } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';

import { Card, Button, CardTitle, CardText } from 'reactstrap';


//var qbCount= 0;
//var rbCount= 0;
//var wrCount= 0;
//var teCount= 0;
//var flexCount= 0;
//var defCount= 0;
//var kCount= 0; 

export default class Example extends React.Component {
  

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    let { myTeam } = this.props
    return (
      <div>
        <Navbar className="navbar-dark bg-dark">

          <NavbarBrand href="/" className="mr-auto text-center">Your Team</NavbarBrand>

          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

          <Collapse isOpen={!this.state.collapsed} navbar>

      
 
          
            <Row>
            <Col sm="12" md={{ size: 2, offset: 5 }}>
              <Card body inverse color="success">
        <CardTitle>Draft Help</CardTitle>
        <CardText></CardText>
        <Button color="secondary">Button</Button>
        </Card>
              </Col>
            </Row>
            
        <Row>
        <Col sm="12" md={{ size: 4, offset: 2 }}>
        <h2 className="text-white text-center">My Team</h2>
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
        {myTeam.map( team =>{
          console.log(team)
          return (
          <tr  key={team._id}>
            <th scope="row">1</th>
            <td>{team.Player}</td>
            <td>{team.Team}</td>
            <td>{team.Position}</td>
            <td>{team.Teir}</td>
            <td>{team.Pr}</td>
          </tr>
          ) 
})}
        </tbody>
      </Table>
          </Col>
          <Col sm="12" md={{ size: 4, offset: 0 }}>
          <h2 className="text-white text-center">Drafted</h2>
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

        </tbody>
      </Table>
      </Col>
        </Row>
        <Row>
            <Col sm="12" md={{ size: 2, offset: 2 }}>
        <Button color="success">Save</Button>{' '}
    </Col>
    </Row>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
