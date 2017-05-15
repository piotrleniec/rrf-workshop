import firebase from 'firebase'
import { SET_MATCHES, SYNCHRONIZE_MATCH } from '../actionTypes'
import { push } from 'react-router-redux'

export const createMatch = name => (dispatch, getState) => {
  firebase.database().ref('matches').push({
    name,
    owner: getState().currentUser
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

export const synchronizeMatch = match => ({
  type: SYNCHRONIZE_MATCH,
  match
})

export const watchMatch = matchId => dispatch => {
  firebase.database().ref(`matches/${matchId}`).on('value', snapshot => {
    dispatch(synchronizeMatch({ ...snapshot.val(), id: matchId }))
  })
}

export const unwatchMatch = matchId => () => {
  firebase.database().ref(`matches/${matchId}`).off()
}

export const joinMatch = matchId => (dispatch, getState) => {
  firebase.database().ref(`matches/${matchId}`).update({
    opponent: getState().currentUser
  }).then(() => {
    dispatch(push(`/matches/${matchId}`))
  })
}
