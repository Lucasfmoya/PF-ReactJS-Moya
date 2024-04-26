import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import "./agregarProd.css";

export const AgregarProd = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "productos"), {
      name,
      category,
      description,
      pictureUrl,
      price,
      stock,
    });

    setName("");
    setCategory("");
    setDescription("");
    setPictureUrl("");
    setPrice("");
    setStock("");

    alert("Producto cargado con éxito");
  };

  return (
    <Container>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column mt-4">
            <input
              className="form-agregar"
              type="text"
              placeholder="Nombre del producto"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="form-agregar"
              type="text"
              placeholder="Descripcion"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className="form-agregar"
              type="text"
              placeholder="Categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              className="form-agregar"
              type="text"
              placeholder="Imagen"
              value={pictureUrl}
              onChange={(e) => setPictureUrl(e.target.value)}
            />
            <input
              className="form-agregar"
              type="number"
              placeholder="Precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              className="form-agregar"
              type="number"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <Button type="submit">Agregar Producto</Button>
        </form>
        <div>
          <img
            className="img-muestra img-fluid"
            src={pictureUrl}
            alt={description}
          />
        </div>
      </div>
    </Container>
  );
};
