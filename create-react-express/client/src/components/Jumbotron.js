
import { Jumbotron, Container } from 'reactstrap';
import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
const Example = (props) => {
  return (
    <div>
      
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 text-center">Teir1 Fantasy Football Draft App</h1>
        
         
   <Row>

    
    <Col sm="12" md={{ size: 8, offset: 4 }}>
        
          <Form inline>
          
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <Button>Submit</Button>
        
      </Form>
</Col>
      </Row>
      <Button>News</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
