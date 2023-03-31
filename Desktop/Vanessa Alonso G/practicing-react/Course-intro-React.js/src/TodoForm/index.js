import React, { useState, useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    //could be:
    //  if (!name.trim()) {
    //   alert("El nombre está vacío, escribe algo");
    //   return;
    // }
    if (newTodoValue.length <= 0) return;
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe tu nuevo TODO"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
