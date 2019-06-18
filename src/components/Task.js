import React from 'react'


const Task = (props) => {
  return(
    <div className="task card" key={props.key}>
      <br></br>
      <button>Edit Your Crap!</button>
      <div>Description: {props.attributes.description}</div>
      <div>Due: {props.attributes.due}</div>
      <div>Priority: {props.attributes.priority}</div>
      <button>Delete This Junk!</button>
    </div>
  )
}


export default Task


// description: "Paint Pineapple"
// due: "Before I Die"
// id: 1
// list_id: 1
// priority: "High"
