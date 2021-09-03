import React, { Component } from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render () {
    return (
      <UserContext.Consumer>
        {({ user, login, isLoggedIn, logout }) => (
          <ThemeContext.Consumer>
            {theme => (
              <div
                style={{
                  border: '1px solid',
                  margin: '1em',
                  padding: '1em',
                  display: 'flex',
                  justifyContent: 'space-between',
                  ...theme
                }}
              >
                <h2>Header</h2>
                <div>
                  {isLoggedIn && <span>{user.name}</span>}
                  {isLoggedIn ? (
                    <span
                      style={{ color: 'red', marginLeft: '10px' }}
                      onClick={logout}
                    >
                      Logout
                    </span>
                  ) : (
                    <Link to='/login'>Login</Link>
                  )}
                </div>
              </div>
            )}
          </ThemeContext.Consumer>
        )}
      </UserContext.Consumer>
    )
  }
}
