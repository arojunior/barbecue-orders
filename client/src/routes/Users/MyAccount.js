import React from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {compose, withHandlers} from 'recompose'

import Form from './components/EditForm'
import Alert from '../../components/Alert'
import {editUserAction} from '../../modules/Users'

const UserAccount = ({handleSubmit, initialValues, error}) =>
  <div>
    <Row bsClass="text-center">
      <h3>My Account</h3>
    </Row>
    <Row>
      <Col md={10}>
        <Form onSubmit={handleSubmit} initialValues={initialValues} />
      </Col>
    </Row>
    <Col md={8} mdOffset={2}>
      {error && <Alert bsStyle="danger" content={error} />}
    </Col>
  </div>

export default compose(
  connect(state => ({
    initialValues: state.user,
    error: state.error
  })),
  withHandlers({
    handleSubmit: ({dispatch}) => values => dispatch(editUserAction(values))
  })
)(UserAccount)
