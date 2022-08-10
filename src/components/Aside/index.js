import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

import Button from "../Button";

import { useTasks } from "../../providers/tasks";

import { Container, Form } from "./styles";



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
            return item.toUpperCase().includes(input.toUpperCase());
        });
        setShowTasks(filterTasks);
    };

    return (
        <Container>
            <section>
                <Button children="A - Z" functionClick={sorted}/>
                <Button children="Z - A" functionClick={sortedReverse}/>
            </section>
            <Form>
                <div>
                    <BiSearchAlt2/>
                    <input
                        type="text"
                        placeholder="Digitar Pesquisa"
                        onChange={(event) => setInput(event.target.value)}
                    />
                </div>
                <button type="button" onClick={() => filter()}>
                    Pesquisar
                </button>
            </Form>
        </Container>
    );
};

export default Aside

