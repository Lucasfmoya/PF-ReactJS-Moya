import { createContext, useEffect, useState } from "react";
import { agregarAlCarrito } from "../helpers/agregarAlCarrito";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cantidad, setCantidad] = useState(1);
  const [item, setItem] = useState(null);
  const carritoLocalStorage = JSON.parse(localStorage.getItem("carrito")) || [];
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState(carritoLocalStorage);
  const [stockDisponible, setStockDisponible] = useState({});

  useEffect(() => {
    const stock = {};
    carrito.forEach((prod) => {
      stock[prod.id] = prod.stock;
    });
    setStockDisponible(stock);
  }, [carrito]);

  const handleSumar = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((prod) =>
        prod.id === id && prod.stock >= prod.cantidad + 1
          ? { ...prod, cantidad: prod.cantidad + 1 }
          : prod
      )
    );
  };

  const handleRestar = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((prod) =>
        prod.id === id && prod.cantidad > 1
          ? { ...prod, cantidad: prod.cantidad - 1 }
          : prod
      )
    );
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
