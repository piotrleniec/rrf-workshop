import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { joinMatch } from '../../actions/matches'

const Match = props => (
  <div>
    <h1>{props.matchName}</h1>
    <p>Owner: {props.ownerEmail}</p>
    <p>Opponent: {props.opponentEmail}</p>

    <Link to={`/matches/${props.matchId}`}>Show</Link>
    &nbsp;|&nbsp;
    {props.canJoin && <a href="#" onClick={props.joinMatch}>Join</a>}
  </div>
)

const mapStateToProps = (state, ownProps) => {
  const match = state.matches.find(match => match.id === ownProps.matchId)
  const { owner, opponent } = match

  return {
    matchName: match.name,
    ownerEmail: owner.email,
    opponentEmail: (opponent || {}).email || '-',
    canJoin: !opponent && owner.id !== state.currentUser.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  joinMatch: () => { dispatch(joinMatch(ownProps.matchId)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Match)
