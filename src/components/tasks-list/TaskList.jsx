import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import TaskCard from "../task-card/TaskCard";
import "./TaskList.css";

function TaskList() {
  const { tasksList } = useContext(MainContext);
  if (tasksList.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <section>
      {tasksList.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </section>
  );
}

export default TaskList;
