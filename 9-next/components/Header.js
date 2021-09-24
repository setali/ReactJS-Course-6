import style from './Header.style'

function Header () {
  return (
    <header>
      <img src='/images/logo.png' />
      <h2>My Header</h2>
      <style jsx>{style}</style>
    </header>
  )
}

export default Header
