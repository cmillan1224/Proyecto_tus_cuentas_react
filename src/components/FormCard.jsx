import React, { useEffect, useState } from "react";
import styles from "./FormCard.module.css";

const FormCard = ({ onAdd, editData, onEditDone }) => {
  const [form, setForm] = useState({
    tipoMovimiento: "",
    cop: "",
    categoria: "",
    descripcion: "",
  });

  // Cargar datos en formulario si se va a editar
  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]); //cada vez que cambie editData la funcion se ejecuta

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.tipoMovimiento && form.cop && form.categoria && form.descripcion) {
      const nuevoMovimiento = { ...form, id: form.id || Date.now() }; //Si el form ya tiene id, significa que es una edición. Si no tiene id, es un nuevo movimiento → le genera uno con Date.now()

      onAdd(nuevoMovimiento); //agregar o actualizar el movimiento en la lista.
      onEditDone(); // llama a oneEditOne en form e app para Notifica que la edición terminó
      setForm({
        tipoMovimiento: "",
        cop: "",
        categoria: "",
        descripcion: "",
      });
    }
  };

  return (
    <div className={styles.formCard}>
      <h2>Tus Cuentas</h2>
      <form onSubmit={handleSubmit}>
        <select
          name="tipoMovimiento"
          value={form.tipoMovimiento}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            Tipo de movimiento
          </option>
          <option value="ingreso">Ingreso</option>
          <option value="gasto">Gasto</option>
        </select>

        <input
          type="text"
          name="cop"
          placeholder="COP"
          value={form.cop}
          onChange={handleChange}
          required
        />

        <select
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            Categoría
          </option>
          <option value="hogar">Hogar</option>
          <option value="pareja">Pareja</option>
          <option value="amigos">Amigos</option>
          <option value="transporte">Transporte</option>
          <option value="facturas">Facturas</option>
          <option value="credito">Crédito</option>
        </select>

        <input
          type="text"
          name="descripcion"
          placeholder="Comentario"
          value={form.descripcion}
          onChange={handleChange}
          required
        />

        <button type="submit">{form.id ? "Actualizar" : "Añadir"}</button>
      </form>
    </div>
  );
};

export default FormCard;
