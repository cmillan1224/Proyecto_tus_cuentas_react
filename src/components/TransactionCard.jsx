import React from "react";
import styles from "./TransactionCard.module.css";

const TransactionCard = ({ movimientos, onView, onEdit, onDelete }) => {
  return (
    <div className={styles.transactionCard}>
      <h2>Movimientos</h2>
      {movimientos.length === 0 ? (
        <p>No hay movimientos aún.</p>
      ) : (
        movimientos.map((mov) => (
          <div key={mov.id} className={styles.movimiento}>
            <strong>{mov.tipoMovimiento}</strong>
            <span>{mov.categoria}</span>
            <span>${Number(mov.cop).toLocaleString()}</span>

            <div className={styles.acciones}>
              <button onClick={() => onView(mov)}>👁️</button>
              <button onClick={() => onEdit(mov)}>✏️</button>
              <button onClick={() => onDelete(mov.id)}>🗑️</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionCard;
