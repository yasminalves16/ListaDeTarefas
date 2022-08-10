import ListCard from "../ListCard";
import { useTasks } from "../../providers/tasks";

const List = () => {
    const { showTasks, valueButton } = useTasks();

    return (
        <>
            <ul>
                {showTasks.map((task, index) => (
                    <ListCard key={index} task={task} id={index} value={valueButton}/>
                ))}
            </ul>
        </>
    );
};

export default List;
