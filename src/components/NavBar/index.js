import { useTasks } from "../../providers/tasks";
import { Container } from "./styles";
import Button from "../Button"

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
                <Button children= "Todas" functionClick={showAll}/>
                <Button children= "Concluidas" functionClick={showCompleted}/>
            </nav>
        </Container>
    );
};

export default NavBar;
