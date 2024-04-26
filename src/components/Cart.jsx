import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { CartContext } from "../context/CartContext";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ItemCount } from "./ItemCount";

export const Cart = () => {
  const { carrito, handleRestar, handleSumar, total, setTotal, vaciarCarrito } =
    useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

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
                <th>Detalle</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((prod) => (
                <tr key={prod.id}>
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
                    <ItemCount
                      cantidad={prod.cantidad}
                      handleRestar={() => handleRestar(prod.id)}
                      handleSumar={() => handleSumar(prod.id)}
                    />
                  </td>
                  <td>${prod.cantidad * prod.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center ">
            <Button onClick={handleVaciar} className="btn btn-danger">
              Eliminar carrito
            </Button>
            <h3 className="mx-4">Total $ {total}</h3>
            <Button className="btn btn-primary">
              <Link to="/checkout" className="link-blanco">
                Finalizar compra
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </Container>
  );
};
