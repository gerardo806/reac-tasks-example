import { useState, useEffect } from "react";
import { tasks } from "../tasks";
import FormTask from "../form-task/FormTask";
import TaskList from "../tasks-list/TaskList";

function App() {
  const [tasksList, setTasksList] = useState([]);
  useEffect(() => setTasksList(tasks), []);

  function createTask(title) {
    const newTask = {
      name: title,
      description: "nuevo",
      id: tasksList.length + 1,
    };
    setTasksList([...tasksList, newTask]);
  }

  return (
    <div>
      <FormTask createTask={createTask} />
      <TaskList data={tasksList} />
    </div>
  );
}

export default App;
