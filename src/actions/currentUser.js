import firebase from 'firebase'
import { push } from 'react-router-redux'
import { SET_CURRENT_USER } from '../actionTypes'

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
})

export const signInWithGoogle = () => dispatch => {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  googleAuthProvider.addScope('email')

  firebase
    .auth()
    .signInWithRedirect(googleAuthProvider)
    .then(() => {
      dispatch(push('/'))
    })
}
