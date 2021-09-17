import { message } from 'antd'
import axios from 'axios'
import { Checkbox, Form, Submit, Text } from 'components/utils/Field'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import CheckState from './CheckState'

export default function New () {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const onFinish = values => {
    console.log('Success:', values)
    setLoading(true)
    axios
      .post('https://jsonplaceholder.typicode.com/users', values)
      .then(response => {
        message.success(`کاربر ${response.data.name} با موفقیت ایجاد شد.`)
        history.push('/person')
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <div>
      <CheckState />
      <h2>ایجاد کابر جدید</h2>

      <Form initialValues={{ admin: true }} onFinish={onFinish}>
        <Text name='username' label='نام کاربری' required />
        <Text name='name' label='نام' required />
        <Checkbox name='admin' label='ادمین' />
        <Submit label={'ذخیره'} loading={loading} disabled={loading} />
      </Form>
    </div>
  )
}
