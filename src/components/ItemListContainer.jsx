import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
//import data from "../data/product.json";
import { ItemList } from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  //const { id } = useParams();
const category = useParams().category;
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productosRef = collection(db, "productos");

    const q = category ? query(productosRef, where("category", "==", category )) : productosRef;

    getDocs(q).then((res) => {
      setItems(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    })
  },[]);

  /* useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      const filteredData = id ? data.filter((d) => d.category === id) : data;
      setItems(filteredData);
      setLoading(false);
    });
  }, [id]); */
  /*  if (loading) {
    return <p>Cargando...</p>;
  } */
  console.log(category);
  return (
    <Container>
      <div className="d-flex flex-wrap justify-content-around">
        <ItemList items={items} />
      </div>
    </Container>
  );
};
