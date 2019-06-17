import React from 'react'
import List from '../components/List'
import Task from '../components/Task'

export default class ListContainer extends React.Component{

  handleAddTask = () => {
    return <Task />
  }

  render(){
    return(
      <div>
      This Contains all the Lists
      <List />
      </div>
    )
  }

}
