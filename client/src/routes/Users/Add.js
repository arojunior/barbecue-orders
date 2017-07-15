import React from 'react'
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap'
import {compose, withProps} from 'recompose'

import Form from './components/Form'

const styles = {
  container: {
    marginTop: '40px'
  }
}

const Container = ({handleSubmit, styles}) =>
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
      </Jumbotron>
    </Col>
  </Grid>

export default compose(
  withProps({
    styles,
    handleSubmit: () => true
  })
)(Container)
