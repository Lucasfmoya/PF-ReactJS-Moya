import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import data from "../data/product.json";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      const filteredData = id ? data.filter((d) => d.category === id) : data;
      setItems(filteredData);
      setLoading(false);
    });
  }, [id]);
  if (loading) {
    return <p>Cargando...</p>;
  }
  return (
    <Container>
      <div className="d-flex flex-wrap justify-content-around">
        <ItemList items={items} />
      </div>
    </Container>
  );
};
