import { change, reset } from 'redux-form'
import firebase from 'firebase'
import { push } from 'react-router-redux'

export const submitSignUpForm = (values, dispatch) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(user => {
      firebase.database()
              .ref(`users/${user.uid}`)
              .set({ id: user.uid, email: user.email })

      dispatch(reset('signUpForm'))
      dispatch(push('/'))
    })
    .catch(() => {
      dispatch(change('signUpForm', 'password', ''))
    })
}
