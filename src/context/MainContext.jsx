import { useState, useEffect, createContext } from "react";
import { tasks } from "../data/tasks";

export const MainContext = createContext();

export function MainContextProvider(props) {
  let x = 20;

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

  function deleteTask(taskId) {
    setTasksList(tasksList.filter((task) => task.id !== taskId));
  }

  return (
    <MainContext.Provider
      value={{
        tasksList: tasksList,
        createTask: createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
