import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const agregarAlCarrito = (item, quantity, carrito, setCarrito) => {
  const itemAgregado = { ...item, quantity, price: item.price };
  const nuevoCarrito = [...carrito];

  const enCarritoIndex = nuevoCarrito.findIndex(
    (item) => item.id === itemAgregado.id
  );

  const nuevaquantity =
    enCarritoIndex !== -1
      ? nuevoCarrito[enCarritoIndex].quantity + quantity
      : quantity;
  const mensaje =
    nuevaquantity > item.stock
      ? "No se puede agregar más de este producto al carrito. Stock insuficiente."
      : null;

  if (!mensaje) {
    enCarritoIndex !== -1
      ? (nuevoCarrito[enCarritoIndex].quantity = nuevaquantity)
      : nuevoCarrito.push(itemAgregado);
    setCarrito(nuevoCarrito);
    productoAgregado(); 
  } else {
    productoNoAgregado(mensaje); 
  }
};
export const productoNoAgregado = (mensaje) => {
  toast.error(mensaje, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: false,
    theme: "light",
  });
};

export const productoAgregado = () => {
  toast.success("Producto agregado al carrito con éxito!", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: false,
    theme: "light",
  });
};
