import React, { Component } from 'react'
import ThemeContext from './ThemeContext'

export default class Sidebar extends Component {
  static contextType = ThemeContext

  render () {
    return (
      <div
        style={{
          border: '1px solid',
          margin: '1em',
          padding: '1em',
          ...this.context
        }}
      >
        <h4>Sidebar</h4>
      </div>
    )
  }
}
