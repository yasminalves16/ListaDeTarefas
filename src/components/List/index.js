import ListCard from "../ListCard"
import { useTasks } from "../../providers/tasks"


const List = () => {

    const { tasks }  = useTasks()

    return (
        <ul>
            {
                tasks.map((task, index) => (
                    <ListCard key={index} task={task} id={index} />
                ))
            }
        </ul>
    )
}

export default List