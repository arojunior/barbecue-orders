import React from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Navigation = () =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-brand" href="/dashboard">
          Barbecue Orders
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/dashboard">
        <NavItem eventKey={1}>Dashboard</NavItem>
      </LinkContainer>
      <LinkContainer to="/companies/add">
        <NavItem eventKey={2}>New company</NavItem>
      </LinkContainer>
      <LinkContainer to="/orders/add">
        <NavItem eventKey={3}>New order</NavItem>
      </LinkContainer>
      <LinkContainer to="/users">
        <NavItem eventKey={4}>My account</NavItem>
      </LinkContainer>
      <LinkContainer to="/">
        <NavItem eventKey={5}>Logout</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>

export default Navigation
