import React from 'react'
import Task from './Task'

const List = (props) => {
  return(
    <div className='lists'>
      {props.listTasks.map((list) => {
        console.log(list)
        return(
          <div></div>
        )
      })}
      <button onClick={()=> {props.clickFunction()}}>Click Me</button>
    </div>
  )
}


export default List
