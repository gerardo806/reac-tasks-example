import { useState, useContext } from "react";
import { MainContext } from "../../context/MainContext";

function FormTask() {
  const { createTask } = useContext(MainContext),
    [title, setTitle] = useState(""),
    [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <h4>nueva tarea</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={function (e) {
            setTitle(e.target.value);
          }}
          autoFocus
          value={title}
        />
        <textarea
          placeholder="Escribe una descripción"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default FormTask;
