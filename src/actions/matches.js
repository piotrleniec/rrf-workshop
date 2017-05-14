import firebase from 'firebase'
import { SET_MATCHES } from '../actionTypes'

export const createMatch = name => (dispatch, getState) => {
  firebase.database().ref('matches').push({
    name,
    owner: getState().currentUser
  }).then(match => {
    console.log(match)
  })
}

export const setMatches = matches => ({
  type: SET_MATCHES,
  matches
})

export const watchMatches = () => dispatch => {
  firebase.database().ref('matches').on('value', snapshot => {
    const matchesObject = snapshot.val()

    const matches = Object.keys(matchesObject).map(matchId => {
      const match = matchesObject[matchId]

      return { ...match, id: matchId }
    })

    dispatch(setMatches(matches))
  })
}

export const unwatchMatches = () => () => {
  firebase.database().ref('matches').off()
}
