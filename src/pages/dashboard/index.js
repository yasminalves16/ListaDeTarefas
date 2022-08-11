import Aside from "../../components/Aside";
import Form from "../../components/Form";
import List from "../../components/List";
import NavBar from "../../components/NavBar";

import {Container, Header, Main} from "./styles";


const Dashboard = () => {


    const date = new Date()
    const today = date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month:"2-digit",
        year: "numeric",
    });
    


    return (
        <Container>
            <Header>
                <h1>Lista de Tarefas</h1>
            </Header>
            <Aside />
            <NavBar />
            <Main>
                <p>{today}</p>
                <Form />
                <List />
            </Main>
        </Container>
    );
};

export default Dashboard;
