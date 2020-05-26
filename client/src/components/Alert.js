import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { compose, withState, withHandlers } from 'recompose';

const AlertDismissable = ({ handleAlertDismiss, alertVisible, ...props }) => {
  setTimeout(() => props.dispatch({ type: 'EMPTY_ERROR' }), 5000);
  return alertVisible ? (
    <Alert bsStyle={props.bsStyle} onDismiss={handleAlertDismiss}>
      {props.content}
    </Alert>
  ) : null;
};

const handleAlertDismiss = ({ alertVisible, alertDismiss }) => () =>
  alertDismiss(!alertVisible);

export default compose(
  connect(),
  withState('alertVisible', 'alertDismiss', true),
  withHandlers({
    handleAlertDismiss,
  })
)(AlertDismissable);
