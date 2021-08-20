import React, { Component } from 'react'
import ACL from './ACL'

class Button extends Component {
  render () {
    return <button {...this.props}>{this.props.children}</button>
  }
}

// const ExportedComponent = Button
const ExportedComponent = ACL(Button)

console.log('ExportedComponent', ExportedComponent.name)

export default ExportedComponent
