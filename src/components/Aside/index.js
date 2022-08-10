import { useTasks } from "../../providers/tasks";
import { useState } from "react";
// import { Container } from "./styles";

const Aside = () => {

    const [input, setInput] = useState("");

    const { showTasks, setShowTasks } = useTasks();

    const sorted = () => {
        const copy = [...showTasks];
        const att = copy.sort();
        setShowTasks(att);
    };

    const sortedReverse = () => {
        const copy = [...showTasks];
        const att = copy.sort().reverse();
        setShowTasks(att);
    };

    
    const filter = () => {
        const filterTasks = showTasks.filter((item) => {

            return (
                item.toUpperCase().includes(input.toUpperCase()) 
            );
        });
        setShowTasks(filterTasks);
    };


    return (
        <div>
            <aside>
                <button onClick={sorted}>A - Z</button>
                <button onClick={sortedReverse}>Z - A</button>
            </aside>
            <form>
                <input
                    type="text"
                    placeholder="Digitar Pesquisa"
                    onChange={(event) => setInput(event.target.value)}
                />
                <button type="button" onClick={() => filter()}>
                    Pesquisar
                </button>
            </form>
        </div>
    );
};

export default Aside;
