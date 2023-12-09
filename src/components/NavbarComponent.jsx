import { Link } from "react-router-dom";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">SERVICE HUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">SERVICE</Nav.Link>
            <Nav.Link href="#">ABOUT US</Nav.Link>
            <Nav.Link href="#action1">PRICING</Nav.Link>
            <Nav.Link href="#action2">CONTACT US</Nav.Link>
          </Nav>

          <ButtonGroup>
            <Button variant="success">LOGIN </Button>
            <Link to="/SignUp">
              <Button variant="outline-success">SIGN UP</Button>
            </Link>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
