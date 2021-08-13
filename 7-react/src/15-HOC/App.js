import { Component } from 'react'
import Button from './Button'
import Tasks from './Tasks'

export default class App extends Component {
  render () {
    return (
      <div>
        <h2>My tasks</h2>
        <Button permission={'add-task'}>Add task</Button>
        <Tasks permission={'view-task-list'} />
      </div>
    )
  }
}
