import React, { Component } from 'react'

export default class LegacyLifeCycle extends Component {
  UNSAFE_componentWillMount () {
    console.log('UNSAFE_componentWillMount')
  }

  UNSAFE_componentWillReceiveProps () {
    console.log('UNSAFE_componentWillReceiveProps')
  }

  UNSAFE_componentWillUpdate () {}

  render () {
    console.log('render')
    return <div>LegacyLifeCycle</div>
  }
}
