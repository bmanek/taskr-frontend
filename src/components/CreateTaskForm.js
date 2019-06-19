import React from 'react'
import { Form } from 'semantic-ui-react'

const CreateTaskForm = (props) => {
  return(
    <Form>
      <div className="ui form">

        <form onSubmit={(event)=> props.handleSubmit(event, props.editTask.id)}>
            <label>Description</label>
            <input type="text" placeholder={props.editTask.length === 0? 'Description' : props.editTask.description} />


            <label>Due Date</label>
            <input type="text" placeholder={props.editTask.length === 0? 'Due Date' : props.editTask.due}/>


            <label>Priority</label>
            <input type="text" placeholder={props.editTask.length === 0? 'Priority' : props.editTask.priority}/>

          <input type="submit" value={props.editTask.length===0? 'Submit': 'Edit this Task'} ></input>
          <br></br>
          <button onClick={() => props.removeForm()}>Go Back</button>
      </form>
    </div>
  </Form>



  )
}

export default CreateTaskForm
