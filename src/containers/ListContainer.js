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
      }
    }
  }

  handleAddTask = () => {
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }

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
    })
  }

  renderLists = () => {
    return this.state.lists.map((list) => (
      <List key={list.id} clickFunction={this.handleAddTask} listTasks={list} />
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
        {this.state.formDisplay ? <CreateTaskForm removeForm={this.removeForm} deleteTask={this.deleteTask} handleSubmit={this.handleSubmit}/> : this.renderLists()}
      </div>
    )
  }

}
