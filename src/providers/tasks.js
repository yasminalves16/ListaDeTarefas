import { createContext, useState, useContext, useEffect } from "react";

import { toast } from "react-toastify";

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
            toast.success("Tarefa adicionada")
        }else{

            toast.error("Insira uma tarefa")
        }

    };


    const removeFromList = (item) => {
        const list = tasks.filter((task, index) => item !== index);
        localStorage.setItem("tasks", JSON.stringify(list));
        setTasks(list);
        setShowTasks(list);

        toast.success("Tarefa deletada ou completa com sucesso")
    };

    const removeAll = () => {
        localStorage.setItem("tasksCompleted", JSON.stringify([]));
        setTasksCompleted([]);
        setShowTasks([]);
    }

    const completedList = (item, id) => {
        removeFromList(id);
        setTasksCompleted([...tasksCompleted, item]);
        toast.success("Parabéns, tarefa completa.. Para ver clique em concluidas")
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
        toast.success("Tarefa atualizada com sucesso")
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
                removeAll,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export const useTasks = () => useContext(TasksContext);
