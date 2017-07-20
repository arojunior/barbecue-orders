import React from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router'

export default ({companies}) => {
  const rows = companies
    ? companies.map(company => {
        return (
          <tr key={company.id}>
            <td>
              {company.name}
            </td>
            <td>
              {company.eni}
            </td>
            <td>
              <Link to={`/companies/${company.id}/orders`}>
                {company.orders}
              </Link>
            </td>
          </tr>
        )
      })
    : null

  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>ENI</th>
          <th>Orders</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  )
}
