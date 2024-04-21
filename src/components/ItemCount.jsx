import Button from "react-bootstrap/Button";

export const ItemCount = ({ cantidad, handleRestar, handleSumar }) => {
  return (
    <div className="d-flex mt-2 mb-3 justify-content-between w-25 item-count">
      <Button
        className="btn boton-restar"
        variant="outline-danger"
        onClick={handleRestar}
      >
        -
      </Button>
      <span>{cantidad}</span>
      <Button
        className="btn boton-sumar"
        variant="outline-success"
        onClick={handleSumar}
      >
        +
      </Button>
    </div>
  );
};
