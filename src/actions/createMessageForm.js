import { createMessage } from './messages'
import { reset } from 'redux-form'

export const submitCreateMessageForm = (values, dispatch) => {
  dispatch(createMessage(values.text))
  dispatch(reset('createMessageForm'))
}
