import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from '../history'
import App from './App'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/sign-up" component={SignUpForm} />
      <Route exact path="/sign-in" component={SignInForm} />
    </Switch>
  </ConnectedRouter>
)

export default Routes
