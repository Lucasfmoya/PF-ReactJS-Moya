import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { Loading } from "./Loading";
import Container from "react-bootstrap/esm/Container";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemRef = collection(db, "items");

    const q = category
      ? query(itemRef, where("category", "==", category))
      : itemRef;

    getDocs(q).then((res) => {
      setItems(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
      setLoading(false);
    });
  }, [category]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <div className="d-flex flex-wrap justify-content-center mt-4">
          <ItemList items={items} />
        </div>
      )}
    </Container>
  );
};
