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
      <Container fluid>
        <Container fluid>
          <div className="row">
            <div className="col-lg-2">
              <Navbar.Brand className="" href="#home">
                <Brand />
              </Navbar.Brand>
            </div>
            <div className="col-lg-10">
              <Navbar.Toggle aria-co ntrols="basic-navbar-nav" />
              <Navbar.Collapse className="minav" id="basic-navbar-nav">
                <Nav className="me-auto ">
                  <Nav.Link href="#home">Inicio</Nav.Link>
                  <Nav.Link href="#link">Nosotros</Nav.Link>
                  <Nav.Link href="#home">Productos</Nav.Link>
                  <Nav.Link href="#link">Contacto</Nav.Link>
                  <NavDropdown title="Soporte" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/2.1">
                      Servicio Técnico
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.2">
                      Garantias
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                  <CartWidget />
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Container>
    </Navbar>
  );
};
