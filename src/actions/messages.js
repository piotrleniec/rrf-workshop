import firebase from 'firebase'

export const createMessage = text => (dispatch, getState) => {
  const newMessageRef = firebase.database().ref('messages').push()

  newMessageRef.set({
    id: newMessageRef.key,
    text,
    user: getState().currentUser,
    createdAt: new Date().getTime()
  })
}
