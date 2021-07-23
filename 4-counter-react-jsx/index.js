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

ReactDOM.render(
  <div>
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <Counter />
  </div>,
  document.getElementById('root')
)

// const element = <Counter></Counter>
// const element = <Counter />
// const element = React.createElement(Counter)

// ReactDOM.render(element, root)

// const root = document.getElementById('root')
// class Counter extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       counter: 0
//     }
//   }

//   increaseButton = () => {
//     return (
//       <button
//         style={{ marginLeft: '10px', marginRight: '20px' }}
//         onClick={() => this.setState({ counter: this.state.counter + 1 })}
//       >
//         Increase
//       </button>
//     )
//   }

//   decreaseButton = () => {
//     return (
//       <button
//         onClick={() => this.setState({ counter: this.state.counter - 1 })}
//       >
//         Decrease
//       </button>
//     )
//   }

//   valueElement = () => {
//     return <span>{this.state.counter}</span>
//   }

//   render () {
//     return (
//       <div>
//         {/* {[this.valueElement(), this.increaseButton(), this.decreaseButton()]} */}
//         {this.valueElement()}
//         {this.increaseButton()}
//         {this.decreaseButton()}
//       </div>
//     )
//   }
// }

// const element = React.createElement(Counter)

// ReactDOM.render(element, root)
