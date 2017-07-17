import React from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {compose, withHandlers} from 'recompose'

import Form from './components/Form'
import Alert from '../../components/Alert'
import {companiesAction} from '../../modules/Companies'

const CompanyAdd = ({handleSubmit, error}) =>
  <div>
    <Row bsClass="text-center">
      <h3>New company</h3>
    </Row>
    <Row>
      <Col md={10}>
        <Form onSubmit={handleSubmit} />
      </Col>
    </Row>
    {error && <Alert bsStyle="danger" content={error} />}
  </div>

export default compose(
  connect(state => ({
    error: state.error
  })),
  withHandlers({
    handleSubmit: ({dispatch}) => values => dispatch(companiesAction(values))
  })
)(CompanyAdd)
