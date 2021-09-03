import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function Home () {
  const theme = useContext(ThemeContext)

  return (
    <div
      style={{
        border: '1px solid',
        margin: '1em',
        padding: '1em',
        ...theme
      }}
    >
      <h2>About us Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa,
        tempora ducimus quam illum cum obcaecati nemo inventore aperiam placeat
        et, quidem, minus magni voluptatem eaque ut quas modi tempore!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa,
        tempora ducimus quam illum cum obcaecati nemo inventore aperiam placeat
        et, quidem, minus magni voluptatem eaque ut quas modi tempore!
      </p>
    </div>
  )
}
