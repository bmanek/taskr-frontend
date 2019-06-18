import React from 'react'
import List from '../components/List'
import CreateTaskForm from '../components/CreateTaskForm'

export default class ListContainer extends React.Component{

  constructor(){
    super()
    this.state = {
      lists: [],
      formDisplay: false,
      form : {
        description: "",
        due: "",
        priority: ""
      },
      listId: ''
    }
  }

  handleAddTask = (id) => {
    this.setState({
      formDisplay: !this.state.formDisplay,
      listId: id
      }
    )}

  // componentDidMount(){
  //   fetch('http://localhost:3000/lists')
  //   .then(resp => resp.json())
  //   .then(listObj => (
  //     this.setState({
  //       lists: listObj
  //     })
  //   ))
  // }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.setState({
      formDisplay: !this.state.formDisplay,
      form: {
        description: event.currentTarget.childNodes[1].value,
        due: event.currentTarget.childNodes[3].value,
        priority: event.currentTarget.childNodes[5].value
      }
    }, ()=>{
      fetch(`http://localhost:3000/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          description: this.state.form.description,
          due: this.state.form.due,
          priority: this.state.form.priority,
          list_id: parseInt(this.state.listId)
        })
      })
      .then(resp => resp.json())
      .then(data => {debugger})
    })

  }

  renderLists = () => {
    return this.state.lists.map((list) => (
      <List id={list.id} key={list.id} handleAddTask={this.handleAddTask} listTasks={list} />
    ))
  }

  componentDidMount(){
    this.setState({
      lists: this.props.user.lists
    })
  }

  removeForm = () => {
    this.setState({
      formDisplay: false
    })
  }

  render(){
    return(
      <div>
      This Contains all the Lists
        {this.state.formDisplay ? <CreateTaskForm removeForm={this.removeForm} deleteTask={this.deleteTask} handleSubmit={this.handleSubmit} listId={this.state.form.listId}/> : this.renderLists()}
      </div>
    )
  }

}
