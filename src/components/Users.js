import React from 'react'
import { connect } from 'react-redux'
import { watchUsers, unwatchUsers } from '../actions/users'

class Users extends React.Component {
  componentDidMount() {
    this.props.watchUsers()
  }

  componentWillUnmount() {
    this.props.unwatchUsers()
  }

  render() {
    return (
      <ul>
        {this.props.users.map(user => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = {
  watchUsers,
  unwatchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
