import React from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Navigation = () =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-brand" href="/home">
          Barbecue Orders
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/dashboard">
        <NavItem eventKey={1}>Dashboard</NavItem>
      </LinkContainer>
      <LinkContainer to="/">
        <NavItem eventKey={2}>Logout</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>

export default Navigation
