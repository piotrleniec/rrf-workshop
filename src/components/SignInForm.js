import React from 'react'
import { reduxForm, Field, change, reset } from 'redux-form'
import firebase from 'firebase'
import { push } from 'react-router-redux'
import GoogleSignInButton from './GoogleSignInButton'

const SignInForm = props => (
  <form onSubmit={props.handleSubmit}>
    <label>
      Email:
      <Field name="email" component="input" type="email" />
    </label>

    <br />

    <label>
      Password:
      <Field name="password" component="input" type="password" />
    </label>

    <br />

    <button>Sign up</button>

    <br />

    <GoogleSignInButton />
  </form>
)

export default reduxForm({
  form: 'signInForm',
  onSubmit: (values, dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        dispatch(reset('signInForm'))
        dispatch(push('/'))
      })
      .catch(() => {
        dispatch(change('signInForm', 'password', ''))
      })
  }
})(SignInForm)
