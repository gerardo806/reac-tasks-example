import { useState } from "react";

function FormTask({ createTask }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title);
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
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default FormTask;
