import { useState, useEffect } from "react";
import { tasks } from "../tasks";
import "./TaskList.css"

function TaskList() {
  const [data, setData] = useState([]);
  useEffect(() => setData(tasks), []);

  if (data.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <section>
      {data.map((task) => (
        <div className="card" key={task.id}>
          <h2>{task.name}</h2> 
          <p>
          {task.description}
          </p>
        </div>
      ))}
    </section>
  );
}

export default TaskList;
