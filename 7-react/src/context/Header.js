import React, { Component } from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

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
                    <button onClick={login}>Login</button>
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
