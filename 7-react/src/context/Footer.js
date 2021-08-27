import React, { Component } from 'react'
import ThemeContext from './ThemeContext'

export default class Footer extends Component {
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
        <h2>Footer</h2>
      </div>
    )
  }
}

Footer.contextType = ThemeContext
