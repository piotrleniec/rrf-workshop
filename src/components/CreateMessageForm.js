import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { submitCreateMessageForm } from '../actions/createMessageForm'

const CreateMessageForm = props => (
  <form onSubmit={props.handleSubmit}>
    <Field name="text" component="input" type="text" />

    <button>Send</button>
  </form>
)

export default reduxForm({
  form: 'createMessageForm',
  onSubmit: submitCreateMessageForm
})(CreateMessageForm)
