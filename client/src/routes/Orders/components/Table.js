import React from 'react'
import {Table, Button, Glyphicon} from 'react-bootstrap'

export default ({order_items, deleteProduct}) => {
  const rows = order_items
    ? order_items.map(item => {
        return (
          <tr key={item.id}>
            <td>
              {item.description}
            </td>
            <td>
              {item.quantity}
            </td>
            <td>
              <Button
                bsSize="xsmall"
                bsStyle="danger"
                onClick={() => deleteProduct(item.id)}>
                <Glyphicon glyph="remove" />
              </Button>
            </td>
          </tr>
        )
      })
    : null

  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  )
}
