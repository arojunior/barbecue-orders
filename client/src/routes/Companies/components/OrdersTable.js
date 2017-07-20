import React from 'react'
import {Table, Button, Glyphicon} from 'react-bootstrap'
import {uniq, map, compose} from 'ramda'

export default ({cancelOrder, orders}) => {
  const order_list = compose(
    map(order => ({
      id: order,
      items: orders.filter(i => i.order_id === order)
    })),
    uniq,
    map(order => order.order_id)
  )(orders)

  const rows = order_list.map(order => {
    const items = order.items.map(item =>
      <div key={item.product_id}>
        {item.quantity} {item.description}
      </div>
    )

    return (
      <tr key={order.id}>
        <td>
          {order.id}
        </td>
        <td>
          {items}
        </td>
        <td>
          <Button
            bsSize="small"
            bsStyle="danger"
            onClick={() => cancelOrder(order.id)}>
            <Glyphicon glyph="remove" /> Cancel
          </Button>
        </td>
      </tr>
    )
  })
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Order</th>
          <th>Items</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  )
}
