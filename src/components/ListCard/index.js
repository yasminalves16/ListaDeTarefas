const ListCard = ({task, id}) => {
  return (
    <li>
      <label htmlFor={id}>{task}</label>
      <button>Completa</button>
      <button>Atualizar</button>
      <button>Deletar</button>
    </li>
  );
};

export default ListCard;
