import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Task from './Task'

export default class List extends Component {

  render() {
    return(
      <Card>
      <div className='lists'>
        <h2>{this.props.listTasks.title}</h2>
          {this.props.tasks.map((list) => {
            return <Task key={list.id} attributes={list} editTask={this.props.editTask} listId={this.props.listTasks.id}
            deleteTask={this.props.deleteTask}/>
          })}
          <button onClick={()=> {this.props.handleAddTask(this.props.id)}}>Add Task</button>
      </div>
      </Card>
    )

  }
}

// +++++++++++++++
// import React from 'react'
//
// const CardExampleCard = () => (
//   <Card>
//     <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>Matthew</Card.Header>
//       <Card.Meta>
//         <span className='date'>Joined in 2015</span>
//       </Card.Meta>
//       <Card.Description>
//         Matthew is a musician living in Nashville.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         22 Friends
//       </a>
//     </Card.Content>
//   </Card>
// )
//
// export default CardExampleCard
