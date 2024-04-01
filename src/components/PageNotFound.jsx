import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <Container>
      <Alert className="mt-5" variant="danger">
        <Alert.Heading>Error 404</Alert.Heading>
        <p>La página solicitada no existe</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Link to="/">
            <Button className="btn btn-danger">Volver a Inicio</Button>
          </Link>
        </div>
      </Alert>
    </Container>
  );
};
