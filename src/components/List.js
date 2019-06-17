import React from 'react'

const List = (props) => {
  return(
    <div className='lists'>
      <ul>

      </ul>
      <button onClick={()=> {props.clickFunction()}}>Click Me</button>
    </div>
  )
}


export default List
