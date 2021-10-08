import React, { useEffect, useState } from 'react'

function Post () {
  const [post, setPost] = useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => setPost(data))
  }, [])

  return (
    <div>
      <h1>Post Item</h1>
      <p>{post.title}</p>
    </div>
  )
}

export default Post
