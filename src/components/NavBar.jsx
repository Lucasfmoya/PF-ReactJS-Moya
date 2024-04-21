import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Brand } from "./Brand";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>
          <Brand />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Inicio
            </Nav.Link>
            <Nav.Link to="/contacto" as={NavLink}>
              Contacto
            </Nav.Link>
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#link">Soporte</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item to="/category/Celulares" as={NavLink}>
                Celulares
              </NavDropdown.Item>
              <NavDropdown.Item to="/category/Smartwatch" as={NavLink}>
                Smartwatch
              </NavDropdown.Item>
              <NavDropdown.Item to="/category/Tv" as={NavLink}>
                Tv
              </NavDropdown.Item>
              <NavDropdown.Item to="/category/Audio" as={NavLink}>
                Audio
              </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
