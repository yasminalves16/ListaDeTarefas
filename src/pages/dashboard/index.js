import Aside from "../../components/Aside";
import Form from "../../components/Form";
import List from "../../components/List";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";

import { Container, Header, Main, StyleButton } from "./styles";

import { useTasks } from "../../providers/tasks";

import { BiCalendar } from "react-icons/bi";

const Dashboard = () => {
    const date = new Date();
    const today = date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    const { removeAll } = useTasks();

    return (
        <Container>
            <Header>
                <h1>Lista de Tarefas</h1>
            </Header>
            <Aside />
            <NavBar />
            <Main>
                <p>
                    {" "}
                    <BiCalendar /> {today}
                </p>
                <StyleButton>
                    <Button
                        functionClick={removeAll}
                        children={"Deletar todas as tarefas conclcuidas"}
                    />
                </StyleButton>
                <Form />
                <List />
            </Main>
        </Container>
    );
};

export default Dashboard;
