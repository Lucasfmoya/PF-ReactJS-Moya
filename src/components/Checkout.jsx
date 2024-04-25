import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../context/CartContext";
import { TituloCarrito } from "./TituloCarrito";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CartContext);
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState("");

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: total,
    };

    if (data.email === data.emailRepeat) {
      alert(`Gracias por su compra ${data.nombre}`);
      setError("");
      reset();
      vaciarCarrito();
    } else {
      setError("Los emails no coinciden, intente de nuevo.");
      return;
    }
    console.log(pedido);
  };

  return (
    <Container>
      {carrito.length === 0 ? (
        <>
          <TituloCarrito props="El carrito esta vacio." />
          <Button className="btn-buscar mt-4 ms-4">
            <Link className="color-nav" to="/">
              Volver a Inicio.
            </Link>
          </Button>
        </>
      ) : (
        <>
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
                  {...register("telefono")}
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
        </>
      )}
    </Container>
  );
};
