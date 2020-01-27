import React, { Component } from "react";
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className="logo" to="/">
              Machine Doctors
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/about"
              to="/about"
            >
              About
            </NavItem>
            {/* <NavItem
                eventKey={3}
                componentClass={Link}
                href="/services"
                to="/services"
              >
                Services
              </NavItem> */}
            <NavItem
              eventKey={4}
              componentClass={Link}
              href="/conatctus"
              to="/contact"
            >
              Contact
            </NavItem>
            <NavItem
              eventKey={4}
              componentClass={Link}
              href="/conatctus"
              to="/contact"
            >
              <Button className="book-a-service" bsStyle="success">
                Book A Service
              </Button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
