import React from 'react'
import Task from './Task'

const List = (props) => {
  return(
    <div className='lists'>
      {props.listTasks.map((list) => {
        
        }
        )
      })}
      <button onClick={()=> {props.clickFunction()}}>Click Me</button>
    </div>
  )
}


export default List
