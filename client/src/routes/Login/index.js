import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withProps} from 'recompose'
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap'

import {loginAction} from '../../modules/Login'

import Form from './components/Form'
import Alert from '../../components/Alert'

const styles = {
  container: {
    marginTop: '40px'
  }
}

const LoginContainer = ({handleSubmit, styles, error}) =>
  <Grid style={styles.container}>
    <Col md={8} mdOffset={2}>
      <Jumbotron>
        <Row bsClass="text-center">
          <h2>
            Login <small>:: Barbecue Orders ::</small>
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
    isLogged: state.isLogged,
    error: state.error
  })),
  withProps({
    styles
  }),
  withHandlers({
    handleSubmit: props => values => props.dispatch(loginAction(values))
  })
)(LoginContainer)
