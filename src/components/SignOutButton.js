import React from 'react'
import firebase from 'firebase'

const signOut = () => {
  firebase.auth().signOut()
}

const SignOutButton = () => (
  <button onClick={signOut}>Sign out</button>
)

export default SignOutButton
