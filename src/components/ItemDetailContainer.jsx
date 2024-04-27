import { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Card from "react-bootstrap/Card";
import { ItemQuantitySelector } from "./ItemQuantitySelector";
import { CartContext } from "../context/CartContext";
import { Loading } from "./Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ItemDetailContainer = () => {
  const {
    item,
    setItem,
    quantity,
    setquantity,
    handleAgregarAlCarrito,
    handleSumar,
    handleRestar,
  } = useContext(CartContext);

  const [loading, setLoading] = useState(true);

  const id = useParams().id;

  useEffect(() => {
    setquantity(1);
    const docRef = doc(db, "items", id);
    getDoc(docRef).then((res) => {
      setItem({ ...res.data(), id: res.id });
      setLoading(false);
    });
  }, []);

  if (!item) return null;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
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
                  <ItemQuantitySelector
                    quantity={quantity}
                    handleRestar={() =>
                      handleRestar(quantity, setquantity, item)
                    }
                    handleSumar={() => handleSumar(quantity, setquantity, item)}
                  />
                  <div>
                    <Button
                      variant="outline-primary"
                      onClick={() => {
                        handleAgregarAlCarrito(item, quantity);
                      }}
                    >
                      Agregar al carrito
                    </Button>

                    <Link to="/">
                      <Button className="ms-3" variant="outline-danger">
                        Volver
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </div>
            </Card>
            <ToastContainer role="alert" />
          </Container>
        </>
      )}
    </>
  );
};
