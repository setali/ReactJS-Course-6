import React, { Component } from 'react'

export default class Users extends Component {
  state = { users: [] }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }

  render () {
    return (
      <div className='users'>
        <h2>Users</h2>
        <hr />
        <ol>
          {this.state.users.map((user, index) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ol>
      </div>
    )
  }
}
