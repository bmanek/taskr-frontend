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
    console.log(this.props)
    return (
      <div className="UserPage">
        <UserProfile user={this.props.user}/>
        <CreateList />
        <ListContainer user={this.props.user}/>

      </div>
    );
  }
}
