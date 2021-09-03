import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'
import { Redirect, useLocation } from 'react-router-dom'

export default function Home () {
  const theme = useContext(ThemeContext)
  const { isLoggedIn, login, loading } = useContext(UserContext)

  const location = useLocation()

  if (loading) {
    return 'Loading .....'
  }

  if (isLoggedIn) {
    return <Redirect to={location?.state?.oldPathname || '/'} />
  }

  return (
    <div
      style={{
        border: '1px solid',
        margin: '1em',
        padding: '1em',
        flex: 3,
        ...theme
      }}
    >
      <h2>Login Page</h2>
      <p>
        <div>
          <input placeholder='username' />
        </div>
        <div>
          <input placeholder='password' />
        </div>
        <p>
          <button onClick={login}>Login</button>
        </p>
      </p>
    </div>
  )
}
