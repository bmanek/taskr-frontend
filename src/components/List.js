import React, { Component } from 'react'
import Task from './Task'

export default class List extends Component {

  render() {
    return(
      <div className='lists'>
        <h2>{this.props.listTasks.title}</h2>
          {this.props.tasks.map((list) => {
            return <Task key={list.id} attributes={list} editTask={this.props.editTask} listId={this.props.listTasks.id}
            deleteTask={this.props.deleteTask}/>
          })}
          <button onClick={()=> {this.props.handleAddTask(this.props.id)}}>Add Task</button>
      </div>
    )

  }
}
