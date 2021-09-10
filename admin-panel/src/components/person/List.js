import React, { Component } from 'react'
import Table from 'components/utils/Table'
import { Link } from 'react-router-dom'
import { EyeFilled } from '@ant-design/icons'
import { connect } from 'react-redux'
import request from 'tools/request'
import { setPersons } from 'actions/person'

class List extends Component {
  state = {
    loading: false
  }

  componentDidMount () {
    this.setState({ loading: true })
    request('/users')
      .then(response => this.props.setItems(response.data))
      .finally(() => this.setState({ loading: false }))
  }

  columns = [
    { title: 'شناسه', key: 'id' },
    { title: 'نام', key: 'name' },
    { title: 'ایمیل', key: 'email' },
    {
      title: 'آدرس',
      key: 'address',
      render: (field, record) =>
        `${field?.city} ${field?.street} ${record.phone}`
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
          data={this.props.persons}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  persons: state.persons
})

const mapDispatchToProps = dispatch => ({
  setItems: data => dispatch(setPersons(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
