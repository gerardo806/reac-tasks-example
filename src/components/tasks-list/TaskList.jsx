import TaskCard from "../task-card/TaskCard";
import "./TaskList.css";

function TaskList(props) {
  if (props.data.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <section>
      {props.data.map((task) => (
        <TaskCard task={task} key={task.id} dropTask={props.dropTask} />
      ))}
    </section>
  );
}

export default TaskList;
