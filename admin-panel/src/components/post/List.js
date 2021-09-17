import { EyeFilled } from '@ant-design/icons'
import { getPosts } from 'actions/post'
import Table from 'components/utils/Table'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const columns = [
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
class List extends Component {
  componentDidMount () {
    this.props.getItems()
  }

  render () {
    // if (this.props.isLoading) return null

    return (
      <div>
        <Table
          columns={columns}
          data={this.props.posts}
          loading={this.props.isLoading}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    isLoading: state.postsIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // setItems: data => dispatch(setPosts(data)),
    getItems: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
