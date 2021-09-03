import React, { Component } from 'react'
import ThemeContext from './ThemeContext'
import { NavLink } from 'react-router-dom'
import './sidebar.css'

export default class Sidebar extends Component {
  static contextType = ThemeContext

  render () {
    return (
      <div
        style={{
          border: '1px solid',
          margin: '1em',
          padding: '1em',
          flex: 1,
          ...this.context
        }}
      >
        <h4>Sidebar</h4>
        <ul>
          <li>
            <NavLink to='/' exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/post'>Posts</NavLink>
          </li>
          <li>
            <NavLink to='/profile'>My Profile</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
