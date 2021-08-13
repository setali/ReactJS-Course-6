import React, { Component } from 'react'

export default class AdvanceSetState extends Component {
  state = {
    todos: [],
    count: 0
  }

  generateTodo () {
    const time = Date.now()
    return {
      title: `TODO: ${time}`,
      id: time
    }
  }

  addTodo () {
    const todo = this.generateTodo()
    console.log('old', this.state.todos)
    this.setState(
      s => ({
        todos: [...s.todos, todo]
      }),
      () => {
        console.log(this.state)
      }
    )

    console.log('new', this.state.todos)
    this.setState(
      state => ({
        count: state.todos.length
      }),
      () => {
        console.log('Count callback')
      }
    )
  }

  render () {
    return (
      <div>
        <button onClick={() => this.addTodo()}>Add todo</button>
        <div>Count: {this.state.count}</div>
        <ol>
          {this.state.todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ol>
      </div>
    )
  }
}
