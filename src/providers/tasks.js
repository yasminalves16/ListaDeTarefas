import { createContext, useState, useContext, useEffect } from "react";

export const TasksContext = createContext([]);

export const TasksProvider = ({ children }) => {

    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    const [tasksCompleted, setTasksCompleted] = useState(
        JSON.parse(localStorage.getItem("tasksCompleted")) || []
    );

    const [showTasks, setShowTasks] = useState(tasks);

    const [valueButton, setValueButton] = useState();


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        localStorage.setItem("tasksCompleted", JSON.stringify(tasksCompleted));
    }, [tasks, tasksCompleted, showTasks]);



    const addToList = (item) => {
        if(item){
            setTasks([...tasks, item]);
        }
    };


    const removeFromList = (item) => {
        const list = tasks.filter((task, index) => item !== index);
        localStorage.setItem("tasks", JSON.stringify(list));
        setTasks(list);
        setShowTasks(list);
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
        setShowTasks(taskUpdated);
    };



    return (
        <TasksContext.Provider
            value={{
                tasks,
                tasksCompleted,
                showTasks,
                setTasks,
                setShowTasks,
                addToList,
                removeFromList,
                completedList,
                updateItem,
                valueButton,
                setValueButton,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export const useTasks = () => useContext(TasksContext);
