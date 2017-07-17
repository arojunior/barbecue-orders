import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap'
import {compose, withProps, withHandlers} from 'recompose'

import Form from './components/AddForm'
import Alert from '../../components/Alert'
import {newUserAction} from '../../modules/Users'

const styles = {
  container: {
    marginTop: '40px'
  }
}

const UserAdd = ({handleSubmit, styles, initialValues = {}, error}) =>
  <Grid style={styles.container}>
    <Col md={8} mdOffset={2}>
      <Jumbotron>
        <Row bsClass="text-center">
          <h2>
            New user<small>:: Barbecue Orders ::</small>
          </h2>
        </Row>
        <Row>
          <Col md={10}>
            <Form onSubmit={handleSubmit} initialValues={initialValues} />
          </Col>
        </Row>
        {error && <Alert bsStyle="danger" content={error} />}
      </Jumbotron>
    </Col>
  </Grid>

export default compose(
  connect(state => ({
    error: state.error
  })),
  withProps({
    styles
  }),
  withHandlers({
    handleSubmit: ({dispatch}) => values => dispatch(newUserAction(values))
  })
)(UserAdd)
