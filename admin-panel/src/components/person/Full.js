import { Divider } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export default function Full () {
  const { id } = useParams()

  const [person, setPerson] = useState({})

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then(response =>
      setPerson(response.data)
    )
  }, [id])

  return (
    <div>
      <h2>نمایش کاربر</h2>
      <Divider />
      <label>نام:</label>
      <Divider type='vertical' />
      <span>{person.name}</span>
      <Divider />
      <label>ایمیل:</label>
      <Divider type='vertical' />
      <span>{person.email}</span>
      <Divider />
      <Link to='/person'>بازگشت به لیست کاربران</Link>
    </div>
  )
}
