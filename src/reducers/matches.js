import { SET_MATCHES, SYNCHRONIZE_MATCH } from '../actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case SET_MATCHES:
      return action.matches
    case SYNCHRONIZE_MATCH:
      if (state.find(match => match.id === action.match.id)) {
        return state.map(match => (
          match.id === action.match.id ? action.match : match
        ))
      }

      return [...state, action.match]
    default:
      return state
  }
}
