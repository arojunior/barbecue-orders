import React from 'react'
import {compose, lifecycle} from 'recompose'
import {connect} from 'react-redux'

import Table from './components/Table'
import {getCompaniesAndOrders} from '../../modules/Companies'

const Dashboard = ({companies}) => {
  return (
    <div>
      <h3>My companies</h3>
      <Table companies={companies} />
    </div>
  )
}

const DashboardComponent = compose(
  connect(state => ({
    companies: state.companies
  })),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(getCompaniesAndOrders())
    }
  })
)(Dashboard)

export default {
  component: DashboardComponent
}
