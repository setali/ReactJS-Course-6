import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function Page404 () {
  const theme = useContext(ThemeContext)

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
      <h2>Page not found</h2>
    </div>
  )
}
