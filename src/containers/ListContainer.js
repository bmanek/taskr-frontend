import React from 'react'
import List from '../components/List'
import Task from '../components/Task'

export default class ListContainer extends React.Component{

  handleAddTask = () => (
    console.log('Hi')
  )

  render(){
    return(
      <div>
      This Contains all the Lists
      <List clickFunction={this.handleAddTask}/>
      <Task />
      </div>
    )
  }

}
