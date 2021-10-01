import Link from 'next/link'

function Menu () {
  return (
    <div>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href='/user'>
            <a>Users</a>
          </Link>
        </li>
        <li>
          <Link href='/post'>
            <a>Posts</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
