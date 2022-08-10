import { useTasks } from "../../providers/tasks";
import { Container } from "./styles";

const NavBar = () => {
    const { tasks, tasksCompleted, setShowTasks, setValueButton } = useTasks();

    const showAll = (event) => {
        setValueButton(event.target.innerText)
        setShowTasks(tasks);
    };

    const showCompleted = (event) => {
        setValueButton(event.target.innerText)
        setShowTasks(tasksCompleted);
    };



    return (
        <Container>
            <nav>
                <button onClick={showAll}>Todos</button>
                <button onClick={showCompleted}>Concluidas</button>
            </nav>
    
        </Container>
    );
};

export default NavBar;
