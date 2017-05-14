import React from 'react'
import { reduxForm, Field, change, reset } from 'redux-form'
import firebase from 'firebase'
import { push } from 'react-router-redux'

const SignUpForm = props => (
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
  </form>
)

export default reduxForm({
  form: 'signUpForm',
  onSubmit: (values, dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        dispatch(reset('signUpForm'))
        dispatch(push('/'))
      })
      .catch(() => {
        dispatch(change('signUpForm', 'password', ''))
      })
  }
})(SignUpForm)
