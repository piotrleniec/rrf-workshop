import React from 'react'

const TextMessage = props => (
  <div>
    [{props.message.user.email}] {props.message.text}
  </div>
)

const ImageMessage = props => (
  <div>
    <div>[{props.message.user.email}] Uploaded an image</div>
    <img
      src={props.message.imageURL}
      alt={`${props.message.user.email} upload.`}
    />
  </div>
)

const Message = props => {
  const { message } = props

  switch(message.type) {
    case 'text':
      return <TextMessage message={message} />
    case 'image':
      return <ImageMessage message={message} />
    default:
      throw new Error('Invalid message type.')
  }
}

export default Message
