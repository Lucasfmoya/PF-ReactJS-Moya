import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Brand } from "./Brand";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Row>
          <Col>
            <Navbar.Brand className="" href="#home">
              <Brand />
            </Navbar.Brand>
          </Col>
          <Col>
            <div className="d-flex justify-content-center">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
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
                </Nav>
                <CartWidget />
              </Navbar.Collapse>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
