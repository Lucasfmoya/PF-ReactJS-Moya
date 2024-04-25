import { createContext, useEffect, useState } from "react";
import { agregarAlCarrito } from "../helpers/agregarAlCarrito";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cantidad, setCantidad] = useState(1);
  const [item, setItem] = useState(null);
  const carritoLocalStorage = JSON.parse(localStorage.getItem("carrito")) || [];
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState(carritoLocalStorage);

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

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

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
        mostrarCarrito,
        handleSumar,
        handleRestar,
        total,
        setTotal,
        handleAgregarAlCarrito,
        cantidadEnCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
