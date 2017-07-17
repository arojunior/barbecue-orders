import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {compose, withHandlers} from 'recompose'

import Form from './components/Form'
import {newCompany} from '../../modules/Companies/actions'

const CompanyAdd = ({handleSubmit}) =>
  <div>
    <Row bsClass="text-center">
      <h3>New company</h3>
    </Row>
    <Row>
      <Col md={10}>
        <Form onSubmit={handleSubmit} />
      </Col>
    </Row>
  </div>

export default compose(
  withHandlers({
    handleSubmit: props => values => newCompany(values)
  })
)(CompanyAdd)
