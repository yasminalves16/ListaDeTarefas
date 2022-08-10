import Aside from "../../components/Aside";
import Form from "../../components/Form";
import List from "../../components/List";
import NavBar from "../../components/NavBar";

import {Container, Header, Main} from "./styles";

const Dashboard = () => {
    return (
        <Container>
            <Header>
                <h1>Lista de Tarefas</h1>
            </Header>
            <Aside />
            <NavBar />
            <Main>
                <Form />
                <List />
            </Main>
        </Container>
    );
};

export default Dashboard;
