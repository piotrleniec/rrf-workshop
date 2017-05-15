import React from 'react'
import { connect } from 'react-redux'
import { watchMatches, unwatchMatches } from '../../actions/matches'
import Match from './Match'

class Matches extends React.Component {
  componentDidMount() {
    this.props.watchMatches()
  }

  componentWillUnmount() {
    this.props.unwatchMatches()
  }

  render() {
    return (
      <div>
        <h1>Matches</h1>

        <hr />
        {this.props.matches.map(match => (
          <div key={match.id}>
            <Match matchId={match.id} />
            <hr />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  matches: state.matches
})

const mapDispatchToProps = {
  watchMatches,
  unwatchMatches
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches)
