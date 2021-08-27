import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Home from './Home'
import React, { useEffect, useState } from 'react'
import ThemeContext, { themes } from './ThemeContext'
import UserContext from './UserContext'
import axios from 'axios'
import cookie from 'js-cookie'

export default function App () {
  const [theme, setTheme] = useState(themes.light)
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = cookie.get('token')

    if (token) {
      getUser()
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
    axios('https://jsonplaceholder.typicode.com/users/1', {
      //   headers: {
      //     Authorization: cookie.get('token')
      //   }
    }).then(resposne => {
      setUser(resposne.data)
      setIsLoggedIn(true)
    })
  }

  function logout () {
    setUser({})
    setIsLoggedIn(false)
    cookie.remove('token')
  }

  return (
    <div>
      <UserContext.Provider value={{ user, login, isLoggedIn, logout }}>
        <ThemeContext.Provider value={theme}>
          {theme === themes.light ? (
            <button onClick={() => setTheme(themes.dark)}>Dark</button>
          ) : (
            <button onClick={() => setTheme(themes.light)}>Light</button>
          )}

          <Header />

          <section style={{ display: 'flex' }}>
            <Sidebar />
            <Home />
          </section>

          <Footer />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
