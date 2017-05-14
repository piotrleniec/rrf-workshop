import { SET_MATCHES } from '../actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case SET_MATCHES:
      return action.matches
    default:
      return state
  }
}
