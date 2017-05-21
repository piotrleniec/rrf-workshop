import React from 'react'
import SignOutButton from './SignOutButton'
import Users from './Users'
import CreateMessageForm from './CreateMessageForm'

const App = () => (
  <div>
    <Users />
    <br />
    <CreateMessageForm />
    <br />
    <SignOutButton />
  </div>
)

export default App
