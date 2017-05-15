import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import currentUser from './currentUser'
import matches from './matches'

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  fortyTwo: () => 42,
  currentUser,
  matches
})
