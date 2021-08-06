import React, { Component } from 'react'

const propertyName = 'age'

const person = {
  name: 'Ali',
  family: 'Mousavi',
  [propertyName]: 31
}

console.log(person)

export default class AdvanceForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChangeInput = e => {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input
            type='text'
            value={this.state.username}
            name='username'
            onChange={this.handleChangeInput}
          />
          <label>Password:</label>
          <input
            type='text'
            value={this.state.password}
            name='password'
            onChange={this.handleChangeInput}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

// export default class Form extends Component {
//   state = {
//     username: '',
//     password: ''
//   }

//   handleChangeUserName = e => this.setState({ username: e.target.value })

//   handleChangePassword = e => this.setState({ password: e.target.value })

//   handleSubmit = e => {
//     e.preventDefault()
//     console.log(this.state)
//     this.setState({
//       username: '',
//       password: ''
//     })
//   }

//   render () {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Username:</label>
//           <input
//             type='text'
//             value={this.state.username}
//             onChange={this.handleChangeUserName}
//           />
//           <label>Password:</label>
//           <input
//             type='text'
//             value={this.state.password}
//             onChange={this.handleChangePassword}
//           />
//           <input type='submit' value='Submit' />
//         </form>
//       </div>
//     )
//   }
// }
