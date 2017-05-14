import React from 'react'
import { connect } from 'react-redux'
import { signInWithGoogle } from '../actions/currentUser'

const GoogleSignInButton = props => (
  <button type="button" onClick={props.signInWithGoogle}>
    Sign in with Google
  </button>
)

const mapDispatchToProps = {
  signInWithGoogle
}

export default connect(null, mapDispatchToProps)(GoogleSignInButton)
