import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { quantityEnCarrito } = useContext(CartContext);

  return (
    <div className="icon-carrito mx-4">
      <Link to="/carrito">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="translate-middle badge rounded-pill bg-danger">
          {quantityEnCarrito()}
        </span>
      </Link>
    </div>
  );
};
