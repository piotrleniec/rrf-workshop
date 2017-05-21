import React from 'react'
import SignOutButton from './SignOutButton'
import Users from './Users'
import CreateMessageForm from './CreateMessageForm'
import Messages from './Messages'

const App = () => (
  <div>
    <Users />
    <br />
    <Messages />
    <br />
    <CreateMessageForm />
    <br />
    <SignOutButton />
  </div>
)

export default App
