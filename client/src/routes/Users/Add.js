import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap'
import {compose, withProps, withHandlers} from 'recompose'

import Form from './components/Form'
import Alert from '../../components/Alert'
import {newUser} from '../../modules/Users/actions'

const styles = {
  container: {
    marginTop: '40px'
  }
}

const Container = ({handleSubmit, styles, error}) =>
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
            <Form onSubmit={handleSubmit} />
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
    handleSubmit: props => values => props.dispatch(newUser(values))
  })
)(Container)
