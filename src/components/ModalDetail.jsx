import React from "react";
import styles from "./ModalDetail.module.css";

const ModalDetail = ({ movimiento, onClose }) => {
  if (!movimiento) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Detalle del Movimiento</h3>
        <p>
          <strong>Tipo:</strong> {movimiento.tipoMovimiento}
        </p>
        <p>
          <strong>Monto:</strong> ${Number(movimiento.cop).toLocaleString()}
        </p>
        <p>
          <strong>Categoría:</strong> {movimiento.categoria}
        </p>
        <p>
          <strong>Comentario:</strong> {movimiento.descripcion}
        </p>

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalDetail;
