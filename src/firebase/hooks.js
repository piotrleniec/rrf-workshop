import firebase from 'firebase'
import store from '../store'
import { setCurrentUser } from '../actions/currentUser'

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
}
