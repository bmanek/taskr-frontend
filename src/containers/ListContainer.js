import React from 'react'
import List from '../components/List'
import CreateTaskForm from '../components/CreateTaskForm'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class ListContainer extends React.Component{

  constructor(){
    super()
    this.state = {
      lists: [],
      allTasks: [],
      formDisplay: false,
      form : {
        description: "",
        due: "",
        priority: ""
      },
      listId: '',
      editThisTask: []
    }
  }

  componentDidMount(){
    let tasks = this.props.user.lists.map((list)=> list.tasks).flat()
    this.setState({
      lists: this.props.user.lists,
      allTasks: tasks
    })
  }

  handleAddTask = (id) => {
    this.setState({
      formDisplay: !this.state.formDisplay,
      listId: id
      }
    )}

  handleSubmit = (event, id) =>{
    event.preventDefault()
    if(event.currentTarget.childNodes[6].value==='Submit'){
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
      .then(newTask => {
        this.setState({
          allTasks: [...this.state.allTasks, newTask]
          })
        })
      })
    }
    else if(event.currentTarget.childNodes[6].value==='Edit this Task'){
      this.setState({
        formDisplay: !this.state.formDisplay,
        form: {
          description: event.currentTarget.childNodes[1].value,
          due: event.currentTarget.childNodes[3].value,
          priority: event.currentTarget.childNodes[5].value
        }
      }, ()=>{
        fetch(`http://localhost:3000/tasks/${id}`, {
          method: 'PATCH',
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
        .then(resp=>resp.json())
        .then(taskObj => {
          let findObject = this.state.allTasks.find((task)=> task.id===taskObj.id)
          let currentIndex = this.state.allTasks.indexOf(findObject)
          let updatedTaskArray = [...this.state.allTasks]
          updatedTaskArray.splice(currentIndex, 1, taskObj)
          this.setState({
            allTasks: updatedTaskArray
          })
        })
      }
    )
    }
  }


  findNewTask = (list_id) => {
    let associatedTasks = this.state.allTasks.filter((task)=> task.list_id === list_id)
    return associatedTasks
  }

  renderLists = () => {
    return this.state.lists.map((list) => (
      <List id={list.id} key={list.id} handleAddTask={this.handleAddTask} listTasks={list} tasks={this.findNewTask(list.id)} editTask={this.editTask} deleteTask={this.deleteTask}/>
    ))
  }

  editTask = (task, list_id) => {
    this.setState({
      formDisplay: !this.state.formDisplay,
      listId: list_id,
      editThisTask: task
    })
  }

  removeForm = () => {
    this.setState({
      formDisplay: false,
      editThisTask: []
    })
  }

  deleteTask = (id) => {
    let updatedTasks = this.state.allTasks.filter( task =>
      task.id !== id)
      this.setState({
        allTasks: updatedTasks
      }, () =>
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
      headers: {"Content-Type":"application/json"
    }})
      )
  }

  render(){
    return(
      <Card.Group>
        {this.state.formDisplay ? <CreateTaskForm removeForm={this.removeForm} handleSubmit={this.handleSubmit} listId={this.state.form.listId} editTask={this.state.editThisTask}/> : this.renderLists()}
      </Card.Group>
    )
  }

}
