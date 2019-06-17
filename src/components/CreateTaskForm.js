import React from 'react'

const CreateTaskForm = (props) => {

  return(
    <div className="ui form">

      <form onSubmit={(event)=> props.handleSubmit(event)}>

          <label>Description</label>
          <input type="text" placeholder="Description"/>


          <label>Due Date</label>
          <input type="text" placeholder="Due Date"/>


          <label>Priority</label>
          <input type="text" placeholder="Priority"/>

        <input type="submit"></input>
        </form>
      </div>



  )
}

export default CreateTaskForm
