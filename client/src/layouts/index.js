import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import Navigation from '../components/Navigation'
import Session from '../components/Session'

const Layout = ({children}) =>
  <div>
    <Navigation />
    <Grid>
      <Row>
        <Col md={10} mdOffset={1}>
          <div className="panel panel-primary">
            <div className="panel-body">
              {Session(children)}
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>

export default Layout
