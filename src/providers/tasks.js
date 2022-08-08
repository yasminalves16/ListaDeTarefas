import { createContext, useState, useContext, useEffect } from "react";

export const TasksContext = createContext([]);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [] 
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addToList = (item) => {
    setTasks([...tasks, item]);
  };

  const removeFromList = (item) => {
    const list = tasks.filter((task, index) => item !== index);
    localStorage.setItem("tasks", JSON.stringify(list));

    setTasks(list);
  };

  return (
    <TasksContext.Provider value={{ setTasks, tasks,  addToList, removeFromList }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
