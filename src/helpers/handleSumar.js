export const handleSumar = (cantidad, setCantidad, item) => {
  if (item && item.stock > cantidad) {
    setCantidad(cantidad + 1);
  }
};