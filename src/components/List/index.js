import ListCard from "../ListCard";
import { useTasks } from "../../providers/tasks";
import Completed from "../../utils/completed.gif";

const List = () => {
    const { showTasks } = useTasks();
    console.log(showTasks);

    return (
        <>
            {showTasks.length > 0 ? (
                <ul>
                    {showTasks.map((task, index) => (
                        <ListCard key={index} task={task} id={index} />
                    ))}
                </ul>
            ) : (
                <figure>
                    <img
                        src={Completed}
                        alt="Gif comemorativo todas as tasks concluidas"
                    />
                </figure>
            )}
        </>
    );
};

export default List;
