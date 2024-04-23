export const agregarAlCarrito = (item, cantidad, carrito, setCarrito) => {
    const itemAgregado = { ...item, cantidad, price: item.price };
    const nuevoCarrito = [...carrito];
    const enCarritoIndex = nuevoCarrito.findIndex((item) => item.id === itemAgregado.id);
  
    const nuevaCantidad = enCarritoIndex !== -1 ? nuevoCarrito[enCarritoIndex].cantidad + cantidad : cantidad;
    const mensaje = nuevaCantidad > item.stock ? "No se puede agregar más de este producto al carrito. Stock insuficiente." : null;
  
    if (!mensaje) {
      enCarritoIndex !== -1 ? nuevoCarrito[enCarritoIndex].cantidad = nuevaCantidad : nuevoCarrito.push(itemAgregado);
      setCarrito(nuevoCarrito);
    } else {
      alert(mensaje);
    }
  };
  