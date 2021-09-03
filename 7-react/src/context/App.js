import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Posts from './Posts'
import Post from './Post'
import Login from './Login'
import Profile from './Profile'
import PrivateRoute from './PrivateRoute'
import Page404 from './404'
import React, { useEffect, useState } from 'react'
import ThemeContext, { themes } from './ThemeContext'
import UserContext from './UserContext'
import axios from 'axios'
import cookie from 'js-cookie'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App () {
  const [theme, setTheme] = useState(themes.light)
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = cookie.get('token')

    if (token) {
      getUser()
    } else {
      setLoading(false)
    }
  }, [])

  function login () {
    axios('https://jsonplaceholder.typicode.com/users/1').then(resposne => {
      setUser(resposne.data)
      cookie.set('token', resposne.data.email, { expires: 7 })
      setIsLoggedIn(true)
    })
  }

  function getUser () {
    setLoading(true)
    axios('https://jsonplaceholder.typicode.com/users/1', {
      //   headers: {
      //     Authorization: cookie.get('token')
      //   }
    })
      .then(resposne => {
        setUser(resposne.data)
        setIsLoggedIn(true)
      })
      .finally(() => setLoading(false))
  }

  function logout () {
    setUser({})
    setIsLoggedIn(false)
    cookie.remove('token')
  }

  return (
    <div>
      <Router>
        <UserContext.Provider
          value={{ user, login, isLoggedIn, logout, loading }}
        >
          <ThemeContext.Provider value={theme}>
            {theme === themes.light ? (
              <button onClick={() => setTheme(themes.dark)}>Dark</button>
            ) : (
              <button onClick={() => setTheme(themes.light)}>Light</button>
            )}

            <Header />

            <section style={{ display: 'flex' }}>
              <Sidebar />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/post' exact>
                  <Posts />
                </Route>
                <Route path='/post/:id' render={props => <Post {...props} />} />
                <Route path='/login' component={Login} />
                <PrivateRoute path='/profile' component={Profile} />
                <Route path='*' component={Page404} />
              </Switch>
            </section>

            <Footer />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </Router>
    </div>
  )
}
