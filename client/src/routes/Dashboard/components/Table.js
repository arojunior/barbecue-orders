import React from 'react'
import {Table} from 'react-bootstrap'

export default () =>
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>ENI</th>
        <th>Orders</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Taller</td>
        <td>11.111.111/1111-11</td>
        <td>
          <a href="#">1</a>
        </td>
      </tr>
    </tbody>
  </Table>
