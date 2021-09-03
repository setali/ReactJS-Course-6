import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import UserContext from './UserContext'
import { Redirect, useLocation } from 'react-router-dom'

export default function PrivateRoute (props) {
  const { isLoggedIn } = useContext(UserContext)
  const { pathname } = useLocation()

  if (isLoggedIn) {
    return <Route {...props} />
  }

  return (
    <Redirect to={{ pathname: '/login', state: { oldPathname: pathname } }} />
  )
}
