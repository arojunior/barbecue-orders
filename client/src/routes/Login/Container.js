import React from 'react'
import {Grid, Row, Col, Jumbotron, Alert} from 'react-bootstrap'

import Form from './components/Form'

export default ({handleSubmit, styles, error}) =>
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
        {error &&
          <Alert bsStyle="danger">
            {error}
          </Alert>}
      </Jumbotron>
    </Col>
  </Grid>
