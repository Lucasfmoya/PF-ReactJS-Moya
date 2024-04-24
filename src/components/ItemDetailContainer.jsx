import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Card from "react-bootstrap/Card";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../context/CartContext";

export const ItemDetailContainer = () => {
  const {
    item,
    setItem,
    cantidad,
    setCantidad,
    handleAgregarAlCarrito,
    handleSumar,
    handleRestar,
  } = useContext(CartContext);

  const [loading, setLoading] = useState(true);

  const id = useParams().id;

  useEffect(() => {
    setCantidad(1);
    const docRef = doc(db, "productos", id);
    getDoc(docRef).then((res) => {
      setItem({ ...res.data(), id: res.id });
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!item) return null;
  return (
    <Container className="d-flex justify-content-center">
      <Card className="mt-5" style={{ width: "52rem" }}>
        <div className="d-flex">
          <div>
            <Card.Img
              className="div-img img-fluid"
              variant="top"
              src={item.pictureUrl}
            />
          </div>
          <Card.Body className="">
            <Card.Text>{item.category}</Card.Text>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>
              <b>${item.price}</b>
            </Card.Text>
            <Card.Text>
              <span>
                Disponible: <b>{item.stock}</b>
              </span>
            </Card.Text>
            <ItemCount
              cantidad={cantidad}
              handleRestar={() => handleRestar(cantidad, setCantidad, item)}
              handleSumar={() => handleSumar(cantidad, setCantidad, item)}
            />
            <Button
              variant="primary"
              onClick={() => {
                handleAgregarAlCarrito(item, cantidad);
              }}
            >
              Agregar al carrito
            </Button>
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
};
