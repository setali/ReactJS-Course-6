import React, { Component } from 'react'

export default class createRef extends Component {
  state = {
    show: false
  }

  textInput = React.createRef()

  toggle = () => {
    this.setState(
      state => ({
        show: !state.show
      }),
      () => {
        console.log(this.textInput.current)
        this.textInput.current?.focus()
      }
    )
    // console.log(this.textInput.current)
    // this.textInput.current?.focus()
  }

  render () {
    return (
      <div>
        <button onClick={this.toggle}>
          {this.state.show ? 'Hide' : 'Show'}
        </button>
        {this.state.show && <input ref={this.textInput} type='text' />}
      </div>
    )
  }
}
