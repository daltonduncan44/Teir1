import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

export default class Drafted extends React.Component {
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
      return (
        <div>
          <Navbar className="navbar-dark bg-dark">
  
            <NavbarBrand href="/" className="mr-auto text-center">Your Team</NavbarBrand>
  
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
  
            <Collapse isOpen={!this.state.collapsed} navbar>
  
        
   
            
              <Row>
              <Col sm="12" md={{ size: 2, offset: 2 }}>
                <Card body inverse color="success">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="secondary">Button</Button>
          </Card>
                </Col>
              </Row>
              <h2 className="text-white text-center">My Team</h2>
          <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
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