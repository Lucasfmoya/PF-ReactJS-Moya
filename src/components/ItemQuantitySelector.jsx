import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { CartContext } from "../context/CartContext";

export const ItemQuantitySelector = ({ quantity, handleRestar, handleSumar }) => {
  const { item } = useContext(CartContext);

  if (!item) return null;
  
  return (
    <div className="d-flex mt-2 mb-3 justify-content-between w-25 item-count">
      <Button
        className="btn boton-restar"
        variant="outline-danger"
        onClick={() => handleRestar(item.id)}
      >
        -
      </Button>
      <span>{quantity}</span>
      <Button
        className="btn boton-sumar"
        variant="outline-success"
        onClick={() => handleSumar(item.id)}
      >
        +
      </Button>
    </div>
  );
};
