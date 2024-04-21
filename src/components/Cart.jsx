import { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { CartContext } from "../context/CartContext";
import Table from "react-bootstrap/Table";

export const Cart = () => {
  const { carrito } = useContext(CartContext);
  const total = carrito.reduce((acc, prod) => acc + (prod.cantidad * prod.price), 0);
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
                    <img className="ms-4 img-table" src={prod.pictureUrl}></img>
                  </td>
                  <td>{prod.cantidad}</td>

                  <td>${prod.cantidad * prod.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div><h3>Total ${total}</h3></div>
        </div>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </Container>
  );
};
