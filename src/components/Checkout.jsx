import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../context/CartContext";
import { TituloCarrito } from "./TituloCarrito";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [pedidoId, setPedidoId] = useState("");

  const comprar = (data) => {
    if (data.email !== data.emailRepeat) {
      setError("Los emails no coinciden, intente de nuevo.");
      return;
    }
    const { nombre, phone, email } = data;

    const sendOrder = carrito.map(
      ({ id, description, name, price, quantity, stock }) => ({
        id,
        name,
        description,
        price,
        quantity,
        stock,
        fecha: new Date().toString(),
      })
    );

    const order = {
      buyer: { nombre, phone, email },
      productos: { ...sendOrder, estado: "generada" },
      total: total,
    };
    const itemRef = collection(db, "items");

    addDoc(itemRef, order).then((doc) => {
      setPedidoId(doc.id);
      setError("");
      vaciarCarrito();
    });
    console.log(order);
  };

  return (
    <Container>
      {pedidoId ? (
        <div>
          <TituloCarrito props="Muchas gracias por tu compra!" />
          <p>
            Tu pedido fue registrado con el ID: <b>{pedidoId}</b>
          </p>
          <Button className="btn-buscar mt-4 ms-4">
            <Link className="link-hover" to="/">
              Volver a Inicio
            </Link>
          </Button>
        </div>
      ) : (
        <>
          {carrito.length === 0 ? (
            <div>
              <TituloCarrito props="El carrito está vacío." />
              <Button className="btn-buscar mt-4 ms-4">
                <Link className="link-hover" to="/">
                  Volver a Inicio
                </Link>
              </Button>
            </div>
          ) : (
            <div>
              <TituloCarrito props="Ya casi es tuyo!" />
              <div className="form-buy">
                <Form onSubmit={handleSubmit(comprar)}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su nombre y apellido"
                      size="sm"
                      required
                      {...register("nombre")}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Control
                      type="tel"
                      placeholder="Ingrese su teléfono"
                      size="sm"
                      required
                      {...register("phone")}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su email"
                      size="sm"
                      required
                      {...register("email")}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="repeatEmail">
                    <Form.Control
                      type="email"
                      placeholder="Repita su email"
                      size="sm"
                      required
                      {...register("emailRepeat")}
                    />
                  </Form.Group>
                  <div>
                    <span className="error">{error}</span>
                  </div>
                  <Form.Group className="mb-3" controlId="comment">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Ingrese aquí sus comentarios"
                      size="sm"
                      {...register("comentarios")}
                    />
                  </Form.Group>
                  <Button type="submit" variant="outline-primary">
                    Comprar
                  </Button>
                </Form>
              </div>
            </div>
          )}
        </>
      )}
    </Container>
  );
};
