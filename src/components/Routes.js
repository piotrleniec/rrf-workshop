import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from '../history'
import App from './App'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import CreateMatchForm from './CreateMatchForm'
import Matches from './Matches'
import Match from './Match'

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/sign-up" component={SignUpForm} />
      <Route exact path="/sign-in" component={SignInForm} />
      <Route exact path="/matches/new" component={CreateMatchForm} />
      <Route exact path="/matches" component={Matches} />
      <Route exact path="/matches/:matchId" component={Match} />
    </Switch>
  </ConnectedRouter>
)

export default Routes
