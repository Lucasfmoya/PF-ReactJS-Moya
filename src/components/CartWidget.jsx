import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
  return (
      <button type="button" className="btn btn-primary position-relative">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          1
        </span>
      </button>
  );
};
