import React from 'react'
import { connect } from 'react-redux'
import { watchMatch, unwatchMatch } from '../actions/matches'

class Match extends React.Component {
  componentDidMount() {
    this.props.watchMatch()
  }

  componentWillUnmount() {
    this.props.unwatchMatch()
  }

  render() {
    if (!this.props.matchObject) return null

    return (
      <div>
        <h1>{this.props.matchObject.name}</h1>
        <p>Owner: {this.props.matchObject.owner.email}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { matchId } = ownProps.match.params
  const match = state.matches.find(match => match.id === matchId)

  return { matchObject: match }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { matchId } = ownProps.match.params

  return {
    watchMatch: () => { dispatch(watchMatch(matchId)) },
    unwatchMatch: () => { dispatch(unwatchMatch(matchId)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Match)
