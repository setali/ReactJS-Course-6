import axios from 'axios'
import React, { Component } from 'react'
import Table from '../utils/Table'
import { Link } from 'react-router-dom'
import { EyeFilled } from '@ant-design/icons'

export default class List extends Component {
  state = {
    users: [],
    loading: false
  }

  componentDidMount () {
    this.setState({ loading: true })
    axios('https://jsonplaceholder.typicode.com/users')
      .then(response => this.setState({ users: response.data }))
      .finally(() => this.setState({ loading: false }))
  }

  columns = [
    { title: 'شناسه', key: 'id' },
    { title: 'نام', key: 'name' },
    { title: 'ایمیل', key: 'email' },
    {
      title: 'آدرس',
      key: 'address',
      render: (field, record) => `${field.city} ${field.street} ${record.phone}`
    },
    {
      title: '',
      key: 'actions',
      render: (field, record) => (
        <Link to={`/person/${record.id}`}>
          <EyeFilled />
        </Link>
      )
    }
  ]

  render () {
    return (
      <div>
        <Table
          columns={this.columns}
          data={this.state.users}
          loading={this.state.loading}
        />
      </div>
    )
  }
}
