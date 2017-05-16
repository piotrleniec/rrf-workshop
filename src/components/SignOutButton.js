import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../actions/currentUser'

const SignOutButton = props => (
  <button onClick={props.signOut}>Sign out</button>
)

const mapDispatchToProps = {
  signOut
}

export default connect(null, mapDispatchToProps)(SignOutButton)
