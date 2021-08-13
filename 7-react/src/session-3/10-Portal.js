import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const portal = document.getElementById('portal')

export default class Portal extends Component {
  state = { counter: 0 }

  componentDidMount () {
    setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000)
  }

  render () {
    return ReactDOM.createPortal(
      <MyPortal counter={this.state.counter} />,
      portal
    )
    // return ReactDOM.createPortal(<span>{this.state.counter}</span>, portal)
  }
}

class MyPortal extends Component {
  render () {
    return <div>My Counter: {this.props.counter}</div>
  }
}
