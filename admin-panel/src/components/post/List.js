import React, { Component } from 'react'
import Table from 'components/utils/Table'
import { Link } from 'react-router-dom'
import { EyeFilled } from '@ant-design/icons'
import { connect } from 'react-redux'
import { setPosts } from 'actions/post'
import request from 'tools/request'

class List extends Component {
  componentDidMount () {
    request('/posts').then(response => this.props.setItems(response.data))
  }

  columns = [
    { title: 'شناسه', key: 'id' },
    { title: 'عنوان', key: 'title' },
    {
      title: '',
      key: 'actions',
      render: (field, record) => (
        <Link to={`/post/${record.id}`}>
          <EyeFilled />
        </Link>
      )
    }
  ]

  render () {
    return (
      <div>
        <Table columns={this.columns} data={this.props.posts} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setItems: data => dispatch(setPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
