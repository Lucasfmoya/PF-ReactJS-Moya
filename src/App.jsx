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
  
  const [cantidad, setCantidad] = useState(1);

  const [item, setItem] = useState(null);

  const handleSumar = (cantidad, setCantidad, item) => {
    if (item && item.stock > cantidad) {
      setCantidad(cantidad + 1);
    }
  };

  const handleRestar = (cantidad, setCantidad) => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleAgregarAlCarrito = (item, cantidad) => {
    agregarAlCarrito(item, cantidad, carrito, setCarrito);
  };

  const [carrito, setCarrito] = useState([]);

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const mostrarCarrito = cantidadEnCarrito() > 0;

  const vaciarCarrito = () => {
    if (setCarrito) {
      setCarrito([]);
    } else {
      return null;
    }
  };

  return (
    <CartContext.Provider
      value={{
        item,
        setItem,
        cantidad,
        setCantidad,
        carrito,
        handleSumar,
        handleRestar,
        handleAgregarAlCarrito,
        cantidadEnCarrito,
        vaciarCarrito,
      }}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/contacto" element={<MyForm />} />
          <Route
            path="/carrito"
            element={<Cart mostrarCarrito={mostrarCarrito} />}
          />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
