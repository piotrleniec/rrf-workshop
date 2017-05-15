import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Match = props => (
  <div>
    <Link to={`/matches/${props.match.id}`}>
      <h1>{props.match.name}</h1>
    </Link>
    <p>Owner: {props.match.owner.email}</p>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  match: state.matches.find(match => match.id === ownProps.matchId)
})

export default connect(mapStateToProps)(Match)
