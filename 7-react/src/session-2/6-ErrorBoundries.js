import React, { Component } from 'react'

export default class Parent extends Component {
  render () {
    return (
      <div>
        <h2>ReactJS COurse</h2>
        <h3>Error Boundries</h3>

        <ErrorBoundries>
          <Child />
        </ErrorBoundries>
      </div>
    )
  }
}

class ErrorBoundries extends Component {
  state = {
    hasError: false
  }

  //   static getDerivedStateFromError (error) {
  //     console.log('getDerivedStateFromError')
  //     console.log(error.message)
  //     return { hasError: true }
  //   }

  componentDidCatch (error) {
    this.setState({ hasError: true })
  }

  render () {
    if (this.state.hasError) {
      return 'Sorry !!! App Crashed.'
    }

    return this.props.children
  }
}

class Child extends Component {
  state = { counter: 0 }

  render () {
    if (this.state.counter === 5) {
      throw new Error('App Crashed')
    }

    return (
      <div>
        Child: {this.state.counter}
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
      </div>
    )
  }
}
