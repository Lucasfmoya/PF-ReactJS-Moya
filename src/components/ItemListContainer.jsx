import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { Loading } from "./Loading";
 
export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productosRef = collection(db, "productos");

    const q = category
      ? query(productosRef, where("category", "==", category))
      : productosRef;

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
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="d-flex flex-wrap justify-content-around">
          <ItemList items={items} />
        </div>
      )}
    </>
  );
};
