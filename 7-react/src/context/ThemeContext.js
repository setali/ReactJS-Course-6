import React from 'react'

export const themes = {
  dark: {
    color: '#fff',
    backgroundColor: '#222'
  },
  light: {
    color: '#000',
    backgroundColor: '#eee'
  }
}

const ThemeContext = React.createContext()

export default ThemeContext
