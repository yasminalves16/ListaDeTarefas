import { useTasks } from "../../providers/tasks";

const ListCard = ({task, id}) => {

  const { removeFromList } = useTasks();

  return (
    <li>
      <label htmlFor={id}>{task}</label>
      <button>Completa</button>
      <button>Atualizar</button>
      <button onClick={() => removeFromList(id)}>Deletar</button>
    </li>
  );
};

export default ListCard;
