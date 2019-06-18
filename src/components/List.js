import React from 'react'
import Task from './Task'

const List = (props) => {
  return(
    <div className='lists'>
    <h2>{props.listTasks.title}</h2>
      {props.listTasks.tasks.map((list) => {
        return <Task key={list.id} attributes={list} />
      })}
      <button onClick={()=> {props.handleAddTask(props.id)}}>Add Task</button>
    </div>
  )
}


export default List
