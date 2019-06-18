import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login'
import UserPage from './containers/UserPage'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      user: null,
      username: '',
      password: ''
    }
  }

  handleLoginInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(users => {
      let current_user = users.find((userObj) => (userObj.username.toLowerCase() === this.state.username.toLowerCase()))
      this.setState({
        user: current_user
      })
    })
  }

  render () {
    return (
      <Router>
        <div className="App">
          <Route exact path ='/profile' render={()=> <UserPage user={this.state.user}/>}/>
          <Route path ='/' render={()=> <Login handleLoginInput={this.handleLoginInput} handleSubmit={this.handleSubmit}/>} />

        </div>
      </Router>
    );
  }
}
