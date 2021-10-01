import React from 'react'
import Main from '../layout/Main'
import Link from 'next/link'

function Custom404 () {
  return (
    <Main>
      <div>My 404</div>
      <Link href='/'>
        <a>Go to Home</a>
      </Link>
    </Main>
  )
}

export default Custom404
