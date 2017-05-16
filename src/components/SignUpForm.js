import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { submitSignUpForm } from '../actions/signUpForm'

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
  onSubmit: submitSignUpForm
})(SignUpForm)
