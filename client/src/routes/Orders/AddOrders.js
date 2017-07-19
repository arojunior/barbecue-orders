import React from 'react'
import {connect} from 'react-redux'
import {Row, Col, Button} from 'react-bootstrap'
import {differenceWith} from 'ramda'
import {
  compose,
  withHandlers,
  lifecycle,
  branch,
  renderNothing
} from 'recompose'

import Form from './components/Form'
import Table from './components/Table'
import Alert from '../../components/Alert'

import actions from './compose/handlers'
import state from './compose/connect'
import cycle from './compose/lifecycle'

const AddOrders = ({
  handleSubmit,
  deleteProduct,
  changeCompany,
  submitOrder,
  companies,
  products,
  order_items,
  error
}) =>
  <div>
    <Row>
      <Row bsClass="text-center">
        <h3>New Order</h3>
      </Row>
      <Row>
        <Col md={6} mdOffset={2}>
          <Form
            onSubmit={handleSubmit}
            companies={companies}
            changeCompany={changeCompany}
            products={differenceWith(
              (prod, item) => prod.id === item.id,
              products,
              order_items
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col md={8} mdOffset={2}>
          <Row bsClass="text-center">
            <h4>Shopping List</h4>
          </Row>
          <Table order_items={order_items} deleteProduct={deleteProduct} />
          <Row bsClass="text-center">
            <Button bsStyle="warning" onClick={submitOrder}>
              Submit order
            </Button>
          </Row>
        </Col>
      </Row>
    </Row>
    <Col md={8} mdOffset={2}>
      {error && <Alert bsStyle="danger" content={error} />}
    </Col>
  </div>

export default compose(
  connect(state),
  withHandlers(actions),
  lifecycle(cycle),
  branch(props => !props.products, renderNothing)
)(AddOrders)
