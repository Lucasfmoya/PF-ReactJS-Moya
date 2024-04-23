import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { CartContext } from "../context/CartContext";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export const Cart = () => {
  const { carrito, handleRestar, handleSumar } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.price,
      0
    );
    setTotal(newTotal);
  }, [carrito]);

  return (
    <Container>
      <h1>Carrito</h1>
      {carrito.length > 0 ? (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Detalle</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((prod) => (
                <tr key={prod.id}>
                  <td>{prod.id}</td>
                  <td>
                    <b className="me-4">{prod.description}</b>
                  </td>
                  <td>
                    <img
                      className="ms-4 img-table"
                      src={prod.pictureUrl}
                      alt={prod.description}
                    ></img>
                  </td>
                  <td>
                    <Button
                      className="btn boton-restar"
                      variant="outline-danger"
                      onClick={handleRestar}
                    >
                      -
                    </Button>
                    <span>{prod.cantidad}</span>
                    <Button
                      className="btn boton-sumar"
                      variant="outline-success"
                      onClick={handleSumar}
                    >
                      +
                    </Button>
                  </td>
                  <td>${prod.cantidad * prod.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div>
            <h3>Total ${total}</h3>
          </div>
        </div>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </Container>
  );
};
