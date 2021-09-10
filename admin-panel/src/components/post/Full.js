import { Divider } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import request from 'tools/request'


export default function Full () {
  const { id } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    request(`/posts/${id}`).then(response => setPost(response.data))
  }, [id])

  return (
    <div>
      <h3>نمایش مقاله</h3>
      <Divider />
      <label>عنوان:</label>
      <Divider type='vertical' />
      <span>{post.title}</span>
      <Divider />
      <p>{post.body}</p>

      <Divider />
      <Link to='/post'>بازگشت به لیست مقالات</Link>
    </div>
  )
}
