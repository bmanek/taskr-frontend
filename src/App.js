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

    }
  }

  render () {
    return (
      <Router>
        <div className="App">
          <Route exact path ='/login' render={()=> <Login />} />
          <Route exact path ='/profile' render={()=> <UserPage />}/>
        </div>
      </Router>
    );
  }
}
