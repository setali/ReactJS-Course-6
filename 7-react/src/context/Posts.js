import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from './ThemeContext'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Posts () {
  const theme = useContext(ThemeContext)

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .finally(() => setLoading(false))
  }, [])

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
      <h2>Posts</h2>
      <p>
        {loading && 'Loading .....'}
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </p>
    </div>
  )
}
