const root = document.getElementById('root')

class Counter extends React.Component {
  constructor () {
    super()
    this.state = {
      counter: 0
    }
  }

  increaseButton = () => {
    return React.createElement(
      'button',
      {
        onClick: () => {
          //this.state.counter = this.state.counter + 1 // Wrong
          this.setState({ counter: this.state.counter + 1 })
        },
        style: {
          marginLeft: '10px'
        }
      },
      'Increase'
    )
  }

  decreaseButton = () => {
    return React.createElement(
      'button',
      {
        onClick: () => {
          this.setState({ counter: this.state.counter - 1 })
        }
      },
      'Decrease'
    )
  }

  valueElement = () => {
    return React.createElement('span', {}, this.state.counter)
  }

  render () {
    return React.createElement(
      'div',
      {},
      this.valueElement(),
      this.increaseButton(),
      this.decreaseButton()
    )
  }
}

const element = React.createElement(Counter)

ReactDOM.render(element, root)
