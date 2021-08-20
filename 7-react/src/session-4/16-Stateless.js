import React, { Component } from 'react'

export default class Stateless extends Component {
  state = {
    users: [
      { id: 1, name: 'Ali' },
      { id: 2, name: 'Eli' },
      { id: 3, name: 'Qoli' }
    ]
  }
  render () {
    return (
      <div>
        {this.state.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

function User ({ user }) {
  return (
    <div>
      <span>Name:</span>
      <span>{user.name}</span>
    </div>
  )
}
