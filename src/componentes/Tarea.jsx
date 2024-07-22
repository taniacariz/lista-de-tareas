import React from "react";
import "../styles/Tarea.css";
import { CgCloseO } from "react-icons/cg";

function Tarea({ texto, completada }) {
  return (
    <div
      className={completada ? "contenedorTarea completada" : "contenedorTarea"}
      /* prop condiciona si es verdadero o falso para aplicar estilos */
    >
      <div className="textoTarea">{texto}</div>
      <div className="iconoTarea">
        <CgCloseO />
      </div>
    </div>
  );
}

export default Tarea;
