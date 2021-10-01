import axios from 'axios'
import { useEffect, useState } from 'react'
import Main from '../../layout/Main'
import Link from 'next/link'

function User ({ users = [] }) {
  console.log('Component')
  //   const [users, setUsers] = useState([])

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(response => response.json())
  //       .then(data => setUsers(data))
  //   }, [])

  return (
    <Main>
      <h2>User list</h2>
      <ol>
        {users.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/user/${id}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ol>
    </Main>
  )
}

export async function getServerSideProps () {
  console.log('Server')
  //   const { data: users } = await axios(
  //     'https://jsonplaceholder.typicode.com/users'
  //   )

  // throw new Error('Server Error')
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default User
