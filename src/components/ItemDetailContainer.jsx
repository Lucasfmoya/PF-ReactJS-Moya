import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import data from "../data/product.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      const dataFound = data.find((d) => d.id === Number(id));
      setItem(dataFound);
    });
  }, [id]);

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
              <b>{item.price}</b>
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
};
