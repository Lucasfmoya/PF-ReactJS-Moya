import Spinner from "react-bootstrap/Spinner";

export const Loading = () => {
  return (
    <div className="spinner d-flex justify-content-center align-items-center">
      <Spinner className="color-logo" animation="border" role="status" />
      <p className="color-nav mx-3 mt-3">Cargando productos...</p>
    </div>
  );
};
