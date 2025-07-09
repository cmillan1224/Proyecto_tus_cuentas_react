import { useState } from "react";
import FormCard from "./components/FormCard";
import TransactionCard from "./components/TransactionCard";
import Modal from "./components/ModalDetail";
import styles from "./App.module.css";

function App() {
  const [movimientos, setMovimientos] = useState([]);
  const [detalleActivo, setDetalleActivo] = useState(null); // para el modal
  const [editando, setEditando] = useState(null); // luego se usa para editar

  const agregarMovimiento = (nuevo) => {
    if (editando) {
      // Si hay un movimiento en edición, reemplazamos el que tenga el mismo ID
      setMovimientos(movimientos.map((m) => (m.id === nuevo.id ? nuevo : m)));
    } else {
      // Si es uno nuevo, lo agregamos con un ID generado
      setMovimientos([...movimientos, nuevo]);
    }
  };

  const eliminarMovimiento = (id) => {
    setMovimientos(movimientos.filter((m) => m.id !== id));
  };

  return (
    <div className={styles.app}>
      <FormCard
        onAdd={agregarMovimiento}
        editData={editando}
        onEditDone={() => setEditando(null)}
      />
      <TransactionCard
        movimientos={movimientos}
        onView={setDetalleActivo}
        onEdit={setEditando}
        onDelete={eliminarMovimiento}
      />
      <Modal
        movimiento={detalleActivo}
        onClose={() => setDetalleActivo(null)}
      />
    </div>
  );
}

export default App;
