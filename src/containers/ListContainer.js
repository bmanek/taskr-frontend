import React from 'react'
import List from '../components/List'
import Task from '../components/Task'

export default class ListContainer extends React.Component{

  constructor(){
    super()
    this.state = {
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

  componentDidMount(){
  }

  render(){
    return(
      <div>
      This Contains all the Lists
        {this.state.formDisplay ? <Task /> : <List clickFunction={this.handleAddTask}/>}
      </div>
    )
  }

}
