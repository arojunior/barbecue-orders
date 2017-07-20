import React from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {
  compose,
  lifecycle,
  withHandlers,
  branch,
  renderNothing
} from 'recompose'

import Table from './components/OrdersTable'
import {getOrdersByCompany} from '../../modules/Companies'
import {cancelOrder} from '../../modules/Orders'

const CompanyAdd = ({handleSubmit, cancelOrder, company, orders}) =>
  <div>
    <Row bsClass="text-center">
      <h3>
        My Orders - {company.name}
      </h3>
    </Row>
    <Row>
      <Col md={10} mdOffset={1}>
        <Table orders={orders} cancelOrder={cancelOrder} />
      </Col>
    </Row>
  </div>

export default compose(
  connect(state => ({
    company: state.company_orders.company,
    orders: state.company_orders.orders
  })),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(getOrdersByCompany(this.props.params.id))
    }
  }),
  withHandlers({
    cancelOrder: ({dispatch}) => id => dispatch(cancelOrder(id))
  }),
  branch(props => !props.company, renderNothing)
)(CompanyAdd)
