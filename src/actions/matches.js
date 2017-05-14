import firebase from 'firebase'

export const createMatch = name => (dispatch, getState) => {
  firebase.database().ref('matches').push({
    name,
    owner: getState().currentUser
  }).then(match => {
    console.log(match)
  })
}
