import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(MainContext);
  return (
    <div className="card">
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
