import React, { useEffect } from "react";
import { GlobalProvider } from "../../context/GlobalContext";

const Toast = () => {
  const { mostrarAlerta, setMostrarAlerta } = GlobalProvider();

  useEffect(() => {
    if (mostrarAlerta) {
      setTimeout(() => {
        setMostrarAlerta(false);
      }, 3000);
    }
  }, [mostrarAlerta]);

  return (
    <>
      {mostrarAlerta && (
        <div
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          className="alert position-fixed top-0"
          style={{ zIndex: "20" }}
        >
          <div className="toast-body fs-6 bg-success text-light rounded ">
            Producto agregado al carrito
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;