import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ syncronize }) {
  const { show, toggleShow } = useStorageListener(syncronize);
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>
            Parece que cambiaste tus TODOs en otra pestaña o ventana del
            Navegador
          </p>
          <p>¿Quieres sincronizar tus TODOs?</p>
        </div>
        <button
          className="TodoForm-button TodoForm-button--add"
          onClick={() => toggleShow}
        >
          Yes!
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
