import React from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { createMatch } from '../actions/matches'

const CreateMatchForm = props => (
  <form onSubmit={props.handleSubmit}>
    <Field name="name" component="input" type="text" />

    <button>create match</button>
  </form>
)

export default reduxForm({
  form: 'createMatchForm',
  onSubmit: (values, dispatch) => {
    dispatch(createMatch(values.name))
    dispatch(reset('createMatchForm'))
  }
})(CreateMatchForm)
