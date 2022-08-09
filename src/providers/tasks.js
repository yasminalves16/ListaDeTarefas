import { createContext, useState, useContext, useEffect } from "react";

export const TasksContext = createContext([]);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [tasksCompleted, setTasksCompleted] = useState(
    JSON.parse(localStorage.getItem("tasksCompleted")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("tasksCompleted", JSON.stringify(tasksCompleted));
  }, [tasks, tasksCompleted]);
  
  

  const addToList = (item) => {
    setTasks([...tasks, item]);
  };

  const removeFromList = (item) => {
    const list = tasks.filter((task, index) => item !== index);
    localStorage.setItem("tasks", JSON.stringify(list));

    setTasks(list);
  };

  const completedList = (item, id) => {
    removeFromList(id);
    setTasksCompleted([...tasksCompleted, item]);
  };

  const updateItem = (id, editValue) => {
    const allTasks = [...tasks];

    const taskUpdated = allTasks.map((task, index) => {
      if (index === id) {
        return (task = editValue);
      }

      return task;
    });

    setTasks(taskUpdated);
  };

  return (
    <TasksContext.Provider
      value={{
        setTasks,
        tasks,
        addToList,
        removeFromList,
        completedList,
        updateItem,
        tasksCompleted
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
