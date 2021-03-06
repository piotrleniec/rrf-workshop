import React from 'react'
import { connect } from 'react-redux'
import { watchMessages, unwatchMessages } from '../../actions/messages'
import Message from './Message'
import './index.css'

class Messages extends React.Component {
  componentDidMount() {
    this.props.watchMessages()
  }

  componentWillUnmount() {
    this.props.unwatchMessages()
  }

  componentDidUpdate() {
    const { messagesContainer } = this.refs

    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }

  render() {
    return (
      <div ref="messagesContainer" className="messages">
        {this.props.messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages
})

const mapDispatchToProps = {
  watchMessages,
  unwatchMessages
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
