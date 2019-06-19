import React from 'react'


const Task = (props) => {
  return(
    <div className="task card" key={props.key}>
      <br></br>
      <div>Description: {props.attributes.description}</div>
      <div>Due: {props.attributes.due}</div>
      <div>Priority: {props.attributes.priority}</div>
      <button onClick={()=>{props.editTask(props.attributes, props.listId)}}>Edit Your Crap!</button>
      <button onClick={() => props.deleteTask(props.attributes.id)}>Delete This Junk!</button>
    </div>
  )
}


export default Task
