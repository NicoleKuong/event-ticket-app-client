import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ticket_icon from "../../Assets/ticket_icon.png";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          className="nav-bar"
          collapseOnSelect
          expand="lg"
          bg="primary"
          variant="dark"
        >
          <Navbar.Brand as={Link} to="/">
            <img
              src={ticket_icon}
              width="50"
              height="35"
              className="d-inline-block align-top"
              alt="letGO logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/signup">
                SIGN UP
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                LOG IN
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/events">
                CREATE EVENT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
