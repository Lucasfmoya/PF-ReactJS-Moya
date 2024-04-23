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
import { agregarAlCarrito } from "./helpers/agregarAlCarrito";

function App() {
  
  const handleAgregarAlCarrito = (item, cantidad) => {
    agregarAlCarrito(item, cantidad, carrito, setCarrito); 
  };

  const [carrito, setCarrito] = useState([]);

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const mostrarCarrito = cantidadEnCarrito() > 0;

  return (
    <CartContext.Provider value={{ carrito, handleAgregarAlCarrito, cantidadEnCarrito }}>
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