import { useState, useEffect } from "react";
import { tasks } from "../../data/tasks";
import FormTask from "../form-task/FormTask";
import TaskList from "../tasks-list/TaskList";

function App() {
  const [tasksList, setTasksList] = useState([]);
  useEffect(() => setTasksList(tasks), []);

  function createTask(task) {
    const newTask = {
      name: task.title,
      description: task.description,
      id: tasksList.length + 1,
    };
    setTasksList([...tasksList, newTask]);
  }

  function dropTask(taskId) {
    setTasksList(tasksList.filter((task) => task.id !== taskId));
  }

  return (
    <div>
      <FormTask createTask={createTask} />
      <TaskList data={tasksList} dropTask={dropTask} />
    </div>
  );
}

export default App;
