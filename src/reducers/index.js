import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import currentUser from './currentUser'
import users from './users'
import messages from './messages'

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  currentUser,
  users,
  messages
})
