import React from 'react'

const user = {
  name: 'Ali',
  family: 'Mousavi',
  permissions: ['view-task-list', 'add-task', 'remove-task', 'edit-task']
}

export default function ACL (Component) {
  return class MyACL extends React.Component {
    render () {
      return (
        user.permissions.includes(this.props.permission) && (
          <Component {...this.props} />
        )
      )
      //   console.log(Component.name, this.props.permission)

      //   if (user.permissions.includes(this.props.permission)) {
      //     return <Component {...this.props} />
      //   } else {
      //     return null
      //   }
    }
  }
}
