import Form from "../../components/Form";
import List from "../../components/List";

const dashboard = () => {
  return (
    <>
      <header>
        <p>Lista de Tarefas</p>
      </header>

      <main>
        <Form />
        <List />
      </main>
    </>
  );
};

export default dashboard;
