import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { PageNotFound } from "./components/PageNotFound";
import { CartContext } from "./context/CartContext";
import { MyForm } from "./components/MyForm";
import { useState } from "react";
import { Cart } from "./components/Cart";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const nuevoCarrito = [...carrito];
    const enCarritoIndex = nuevoCarrito.findIndex((item) => item.id === itemAgregado.id);

    if (enCarritoIndex !== -1) {
      nuevoCarrito[enCarritoIndex].cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const mostrarCarrito = cantidadEnCarrito() > 0;

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/contacto" element={<MyForm />} />
          <Route path="/carrito" element={<Cart mostrarCarrito={mostrarCarrito} />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;