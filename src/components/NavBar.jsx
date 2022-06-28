import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">X-COFFEE</Navbar.Brand>
          <Nav>
            <Nav.Link href="#contact">FEEDBACK</Nav.Link>
            <Nav.Link href="#contact">CONTACT US</Nav.Link>
            <Nav.Link href="#login">LOGIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
