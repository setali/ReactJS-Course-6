import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

export default function Home () {
  const theme = useContext(ThemeContext)
  const { isLoggedIn, user } = useContext(UserContext)

  return (
    <div
      style={{
        border: '1px solid',
        margin: '1em',
        padding: '1em',
        ...theme
      }}
    >
      <h2>Home Page</h2>
      {isLoggedIn && <p>Welcome {user.name}</p>}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa,
        tempora ducimus quam illum cum obcaecati nemo inventore aperiam placeat
        et, quidem, minus magni voluptatem eaque ut quas modi tempore!
      </p>
    </div>
  )
}
