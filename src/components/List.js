import React, { Component } from 'react'
import Task from './Task'

export default class List extends Component {

  constructor() {
    super()
    let t = this
    debugger
    this.state = {
      tasks: this.props.listTasks.tasks
    }
  }
  // somehow we're not passing props (this.props is undefined on load)
  // this behavior began when we added the new states to ListContainer and here,
  // lots of debugging and pain.

  componentDidMount() {
    this.setState({
      tasks: [...this.state.tasks, this.props.newTask]
    })
  }

  render() {
    console.log(this.props)
    return(
      <div className='lists'>
        <h2>{this.props.listTasks.title}</h2>
          {this.state.tasks.map((list) => {
            return <Task key={list.id} attributes={list} />
          })}
          <button onClick={()=> {this.props.handleAddTask(this.props.id)}}>Add Task</button>
      </div>
    )

  }
}
