import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

import Navigation from '../components/Navigation';
import Session from '../components/Session';

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <Grid>
      <Row>
        <Col md={10} mdOffset={1}>
          <Panel bsStyle="primary">{Session(children)}</Panel>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Layout;
