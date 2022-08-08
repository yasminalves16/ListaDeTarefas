const dashboard = () => {
  return (
    <>
      <header>
        <p>Lista de Tarefas</p>
      </header>
      <main>
        <form autoComplete="off">
            <input type="text" name="task" id="task" placeholder="O que temos para fazer ?" required/>
            <button type="submit">Adicionar task</button>
        </form>
        <ul>
            <li>
                <label htmlFor="task">Criando Base</label>
                <button>Completa</button>
                <button>Atualizar</button>
                <button>Deletar</button>
            </li>
        </ul>
      </main>
    </>
  );
};

export default dashboard;
