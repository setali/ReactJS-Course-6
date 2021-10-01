import React from 'react'
import Main from '../../layout/Main'
import { useRouter } from 'next/router'
import axios from 'axios'

function User ({ user = {} }) {
  //   const router = useRouter()

  //   console.log(router.query)

  return (
    <Main>
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </Main>
  )
}

export async function getServerSideProps ({ params }) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  )

  return {
    props: {
      user
    }
  }
}

export default User
