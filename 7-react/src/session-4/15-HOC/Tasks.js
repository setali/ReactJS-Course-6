import React, { Component } from 'react'
import Button from './Button'
import ACL from './ACL'

class Tasks extends Component {
  state = {
    tasks: [
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
      { id: 3, title: 'Task 3' },
      { id: 4, title: 'Task 4' }
    ]
  }

  render () {
    return (
      <div>
        <ol>
          {this.state.tasks.map(({ id, title }) => (
            <li key={id}>
              {title}
              <Button permission={'remove-task'}>Remove</Button>
              <Button permission={'edit-task'}>Edit</Button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ACL(Tasks)
