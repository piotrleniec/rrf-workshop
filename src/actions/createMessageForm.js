import { createTextMessage } from './messages'
import { reset } from 'redux-form'

export const submitCreateMessageForm = (values, dispatch) => {
  dispatch(createTextMessage(values.text))
  dispatch(reset('createMessageForm'))
}
