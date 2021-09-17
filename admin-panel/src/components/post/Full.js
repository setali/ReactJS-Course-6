import { Divider } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPost } from 'actions/post'
import { useDispatch, useSelector } from 'react-redux'

export default function Full () {
  const { id } = useParams()

  const dispatch = useDispatch()
  const post = useSelector(s => s.post)

  useEffect(() => {
    dispatch(getPost(id))
  }, [id])

  // const post = useSelector(state => {
  //   console.log('state:', state)
  //   return state.post
  // })

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
