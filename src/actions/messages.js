import firebase from 'firebase'
import { SET_MESSAGES } from '../actionTypes'

export const createTextMessage = text => (dispatch, getState) => {
  const newMessageRef = firebase.database().ref('messages').push()

  newMessageRef.set({
    id: newMessageRef.key,
    type: 'text',
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

export const createImageMessage = image => (dispatch, getState) => {
  const newMessageRef = firebase.database().ref('messages').push()
  const messageId = newMessageRef.key
  const imageExtension = image.name.split('.')[1]

  firebase
    .storage()
    .ref('messages')
    .child(`${messageId}.${imageExtension}`)
    .put(image)
    .then(snapshot => {
      newMessageRef.set({
        id: messageId,
        type: 'image',
        imageURL: snapshot.downloadURL,
        user: getState().currentUser,
        createdAt: new Date().getTime()
      })
    })
}
