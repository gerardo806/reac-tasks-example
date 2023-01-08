function TaskCard({ task, dropTask }) {
  return (
    <div className="card">
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <button onClick={() => dropTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
