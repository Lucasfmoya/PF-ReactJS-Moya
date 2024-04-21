import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);
  const mostrarCarrito = cantidadEnCarrito() > 0;

  return (
    mostrarCarrito && (
      <Link to="/carrito">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="translate-middle badge rounded-pill bg-danger">
          {cantidadEnCarrito()}
        </span>
      </Link>
    )
  );
};
