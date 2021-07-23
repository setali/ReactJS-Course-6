import React from 'react'

class Counter extends React.Component {
  constructor () {
    super()
    this.state = {
      counter: 0
    }
  }

  render () {
    console.log('Render:', this.state.counter)
    return (
      <div>
        <span>{this.state.counter}</span>
        <button
          style={{ marginLeft: '10px', marginRight: '20px' }}
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increase
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
