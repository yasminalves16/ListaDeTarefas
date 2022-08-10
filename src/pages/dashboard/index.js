import Aside from "../../components/Aside";
import Form from "../../components/Form";
import List from "../../components/List";
import NavBar from "../../components/NavBar";

const Dashboard = () => {
  return (
    <>
      <header>
        <p>Lista de Tarefas</p>
      </header>
      <Aside/>
      <NavBar/>
      <main>
        <Form />
        <List />
      </main>
    </>
  );
};

export default Dashboard;
