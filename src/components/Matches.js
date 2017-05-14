import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { watchMatches, unwatchMatches } from '../actions/matches'

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
        {this.props.matches.map(match => (
          <div key={match.id}>
            <Link to={`/matches/${match.id}`}>
              <h1>{match.name}</h1>
            </Link>
            <p>Owner: {match.owner.email}</p>
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
