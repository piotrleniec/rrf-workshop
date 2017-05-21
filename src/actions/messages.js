import firebase from 'firebase'
import { SET_MESSAGES } from '../actionTypes'

export const createMessage = text => (dispatch, getState) => {
  const newMessageRef = firebase.database().ref('messages').push()

  newMessageRef.set({
    id: newMessageRef.key,
    text,
    user: getState().currentUser,
    createdAt: new Date().getTime()
  })
}

const setMessages = messages => ({
  type: SET_MESSAGES,
  messages
})

export const watchMessages = () => (dispatch, getState) => {
  firebase
    .database()
    .ref('messages')
    .orderByChild('createdAt')
    .on('value', snapshot => {
      const messagesObject = snapshot.val() || {}
      const messages = Object.values(messagesObject)

      dispatch(setMessages(messages))
    })
}

export const unwatchMessages = () => () => {
  firebase.database().ref('messages').off()
}
