import React from 'react'


const Task = (props) => {

  return(
    <div class="ui form">
      <div class="fields">
      <form onSubmit={"ADD A SUBMIT FORM CALLBACK"}>
        <div class="field">
          <label>Description</label>
          <input type="text" placeholder="Description"/>
        </div>
        <div class="field">
          <label>Due Date</label>
          <input type="text" placeholder="Due Date"/>
        </div>
        <div class="field">
          <label>Last name</label>
          <input type="text" placeholder="Last Name"/>
          <input type="submit"></input>
        </div>
        </form>
      </div>
    </div>


  )
}

export default Task
