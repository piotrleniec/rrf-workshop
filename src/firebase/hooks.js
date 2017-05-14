import firebase from 'firebase'
import store from '../store'
import { setCurrentUser } from '../actions/currentUser'
import { push } from 'react-router-redux'

export default () => {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      store.dispatch(setCurrentUser(null))
      store.dispatch(push('/sign-in'))
      return
    }

    store.dispatch(setCurrentUser({
      id: user.uid,
      email: user.email
    }))
  })

  firebase.auth().getRedirectResult().then(result => {
    if (!result.user) return

    store.dispatch(push('/'))
  })
}
