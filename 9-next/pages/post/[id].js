import axios from 'axios'
import React from 'react'
import Main from '../../layout/Main'

function Post ({ post = {} }) {
  return (
    <Main>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </Main>
  )
}

export async function getStaticPaths () {
  //   const paths = [
  //     { params: { id: '1' } },
  //     { params: { id: '2' } },
  //     { params: { id: '3' } }
  //   ]

  const { data: posts } = await axios(
    'https://jsonplaceholder.typicode.com/posts'
  )

  posts.length = 5

  const paths = posts.map(post => ({ params: { id: `${post.id}` } }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
  const { data: post } = await axios(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )

  console.log('ID: ', params.id)

  return {
    props: {
      post
    },
    revalidate: 5
  }
}

export default Post
