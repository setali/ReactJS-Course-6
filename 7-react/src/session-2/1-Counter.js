import React, { Component } from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)
    console.log(props.defaultValue)

    this.state = {
      counter: props.defaultValue
    }

    this.increase = this.increase.bind(this)
  }

  increase () {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrease () {
    this.setState({ counter: this.state.counter - 1 })
  }

  decrease2 = () => this.setState({ counter: this.state.counter - 2 })

  render () {
    return (
      <div>
        Counter: {this.state.counter}
        <button onClick={this.increase}>+</button>
        <button onClick={() => this.decrease()}>-</button>
        <button onClick={this.decrease2}>-2</button>
      </div>
    )
  }
}

export default Counter
