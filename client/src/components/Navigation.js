import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {compose, withHandlers} from 'recompose'

import {logoutAction} from '../modules/Login'

const Navigation = ({logout}) =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-brand" href="/dashboard">
          Barbecue Orders
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <LinkContainer to="/dashboard">
        <NavItem eventKey={1}>Dashboard</NavItem>
      </LinkContainer>
      <LinkContainer to="/companies">
        <NavItem eventKey={2}>New company</NavItem>
      </LinkContainer>
      <LinkContainer to="/orders">
        <NavItem eventKey={3}>New order</NavItem>
      </LinkContainer>
      <LinkContainer to="/users">
        <NavItem eventKey={4}>My account</NavItem>
      </LinkContainer>
      <NavItem eventKey={5} href="#" onClick={logout}>
        Logout
      </NavItem>
    </Nav>
  </Navbar>

export default compose(
  connect(),
  withHandlers({
    logout: ({dispatch}) => () => dispatch(logoutAction())
  })
)(Navigation)
