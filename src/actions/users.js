import firebase from 'firebase'
import { SET_USERS } from '../actionTypes'

const setUsers = users => ({
  type: SET_USERS,
  users
})

export const watchUsers = () => dispatch => {
  firebase.database().ref('users').on('value', snapshot => {
    const usersObject = snapshot.val()
    const users = Object.keys(usersObject).map(userId => ({
      ...usersObject[userId], id: userId
    }))

    dispatch(setUsers(users))
  })
}

export const unwatchUsers = () => () => {
  firebase.database().ref('users').off()
}
