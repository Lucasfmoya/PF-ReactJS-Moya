export const handleRestar = (cantidad, setCantidad) => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };