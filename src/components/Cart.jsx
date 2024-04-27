import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { CartContext } from "../context/CartContext";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export const Cart = () => {
  const { carrito, setCarrito, total, setTotal, vaciarCarrito } =
    useContext(CartContext);

  const [quantities, setQuantities] = useState({});

  const handleVaciar = () => {
    vaciarCarrito();
  };

  useEffect(() => {
    const newTotal = carrito.reduce(
      (acc, prod) => acc + quantities[prod.id] * prod.price,
      0
    );
    setTotal(newTotal);
  }, [carrito, quantities, setTotal]);

  useEffect(() => {
    const newQuantities = {};
    carrito.forEach((prod) => {
      newQuantities[prod.id] = prod.quantity;
    });
    setQuantities(newQuantities);
  }, [carrito]);

  const handleEliminarItem = (itemId) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = prevCarrito.filter((prod) => prod.id !== itemId);
      return nuevoCarrito;
    });
  };
  return (
    <Container>
      <h1>Carrito</h1>
      {carrito.length > 0 ? (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Detalle</th>
                <th className="text-center">Producto</th>
                <th className="text-center">Cantidad</th>
                <th className="text-center">Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((prod) => (
                <tr key={prod.id}>
                  <td>
                    <b className="me-4">{prod.description}</b>
                  </td>
                  <td className="text-center">
                    <img
                      className="ms-4 img-table"
                      src={prod.pictureUrl}
                      alt={prod.description}
                    ></img>
                  </td>
                  <td className="text-center">{prod.quantity}</td>
                  <td className="text-center">
                    US $ {quantities[prod.id] * prod.price}
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      onClick={() => {
                        handleEliminarItem(prod.id);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
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
