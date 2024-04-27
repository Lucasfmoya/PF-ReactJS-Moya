import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const mensajeEliminar = (mensaje) => {
  toast.error(mensaje, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: false,
    theme: "light",
  });
};
