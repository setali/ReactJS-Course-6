import { Component } from 'react'
import { connect } from 'react-redux'

class CheckState extends Component {
  render () {
    return (
      <div>
        <ol>
          {this.props.persons.map(person => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckState)
