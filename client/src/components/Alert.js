import React from 'react'
import {Alert} from 'react-bootstrap'
import {compose, withState, withHandlers} from 'recompose'

const AlertDismissable = ({...props, handleAlertDismiss, alertVisible}) =>
  alertVisible
    ? <Alert bsStyle={props.bsStyle} onDismiss={handleAlertDismiss}>
        {props.content}
      </Alert>
    : null

const handleAlertDismiss = ({alertVisible, alertDismiss}) => () =>
  alertDismiss(!alertVisible)

export default compose(
  withState('alertVisible', 'alertDismiss', true),
  withHandlers({
    handleAlertDismiss
  })
)(AlertDismissable)
