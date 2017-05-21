import React from 'react'
import { connect } from 'react-redux'
import { createImageMessage } from '../actions/messages'

const ImageUploadButton = props => (
  <input type="file" onChange={props.uploadImage} />
)

const mapDispatchToProps = dispatch => ({
  uploadImage: event => {
    const image = event.target.files[0]

    dispatch(createImageMessage(image))
  }
})

export default connect(null, mapDispatchToProps)(ImageUploadButton)
