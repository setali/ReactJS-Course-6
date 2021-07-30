import React, { Component } from 'react'

export default class Parent extends Component {
  state = { mount: true }
  render () {
    return (
      <div>
        {this.state.mount && <Child />}
        <button onClick={() => this.setState({ mount: !this.state.mount })}>
          {this.state.mount ? 'Unmount' : 'Mount'}
        </button>
      </div>
    )
  }
}

class Child extends Component {
  state = { counter: 0 }

  componentDidMount () {
    console.log('componentDidMount')
    this.intervalId = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 1000)

    console.log(this.intervalId)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
    clearInterval(this.intervalId)
  }

  render () {
    console.log('render')
    return <div>Child: {this.state.counter}</div>
  }
}
