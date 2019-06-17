import React, { Component } from 'react';
import UserProfile from '../components/UserProfile'
import ListContainer from './ListContainer'
import CreateList from '../components/CreateList'

export default class UserPage extends Component {

  constructor() {
    super()
    this.state = {

    }
  }

  render () {
    return (
      <div className="UserPage">
        <UserProfile />
        <CreateList />
        <ListContainer />

      </div>
    );
  }
}



// <ListContainer /> We haven't built this yeeetttt.....
// <CreateList /> We haven't built this yeeetttt.....
