import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export const Formu = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    emailRepeat: "",
    telefono: "",
    comentarios: "",
  });

  const limpiarDatos = () => {
    setDatos({
      nombre: "",
      email: "",
      emailRepeat: "",
      telefono: "",
      comentarios: "",
    });
  };

  const handleDatos = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datos);
    // Aquí podrías enviar los datos a través de una función o servicio
    limpiarDatos();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Ingrese su nombre y apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="John Doe"
          size="sm"
          value={datos.nombre}
          name="nombre"
          onChange={handleDatos}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Ingrese su teléfono</Form.Label>
        <Form.Control
          type="tel" // Cambiado a type="tel" para números de teléfono
          placeholder="3512345678"
          size="sm"
          name="telefono"
          value={datos.telefono} // Añadido value para mantener el estado del campo
          onChange={handleDatos}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Ingrese su email</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          size="sm"
          value={datos.email}
          name="email"
          onChange={handleDatos}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="repeatEmail">
        <Form.Label>Repita su email</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          size="sm"
          value={datos.emailRepeat}
          name="emailRepeat"
          onChange={handleDatos}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Comentarios</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Ingrese aquí sus comentarios"
          size="sm"
          value={datos.comentarios}
          name="comentarios"
          onChange={handleDatos}
        />
      </Form.Group>
      <Button type="submit" variant="outline-primary">
        Comprar
      </Button>
    </Form>
  );
};

export default Formu;
