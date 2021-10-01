import axios from 'axios'
import React from 'react'
import Main from '../../layout/Main'
import Link from 'next/link'

function Posts ({ posts }) {
  return (
    <Main>
      <h2>Post list</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Main>
  )
}

export async function getStaticProps () {
  const { data: posts } = await axios(
    'https://jsonplaceholder.typicode.com/posts'
  )

  posts.length = 5
  console.log('Post length: ', posts.length)

  return {
    props: {
      posts
    },
    revalidate: 5 // seconds
  }
}

export default Posts
