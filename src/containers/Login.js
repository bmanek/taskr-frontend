import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Button, Form, Segment, Message } from "semantic-ui-react";

class Login extends Component {
  
  render () {
    return (
      <Segment>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input type='username' placeholder='username' label='username' name='username'/>
            <Form.Input type='password' placeholder='password' label='password' name='password'/>
          </Form.Group>
          <Button type='submit'>Login</Button>
        </Form>
      </Segment>
    );
  }
}


export default withRouter(Login)
