import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-brand" to="/dashboard">
          Barbecue Orders
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li eventKey={2}>
        <Link to="/companies">New company</Link>
      </li>
      <li>
        <Link to="/orders">New order</Link>
      </li>
      <li>
        <Link to="/users">My account</Link>
      </li>
      <li>
        <Link to="/">Logout</Link>
      </li>
    </Nav>
  </Navbar>
);

export default Navigation;
