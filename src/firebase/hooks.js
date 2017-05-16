import firebase from 'firebase'
import store from '../store'
import { setCurrentUser } from '../actions/currentUser'
import { push } from 'react-router-redux'

export default () => {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      store.dispatch(setCurrentUser(null))
      return
    }

    store.dispatch(setCurrentUser({
      id: user.uid,
      email: user.email
    }))
  })

  firebase.auth().getRedirectResult().then(result => {
    const { user } = result

    if (!user) return

    firebase.database()
            .ref(`users/${user.uid}`)
            .set({ id: user.uid, email: user.email })
    store.dispatch(push('/'))
  })
}
