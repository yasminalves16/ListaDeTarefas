import { useTasks } from "../../providers/tasks";
import { useState } from "react";


const ListCard = ({ task, id }) => {
  const { removeFromList, completedList, updateItem } = useTasks();
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(task);

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = (id) => {
    setOnEdit(false);
    if (editValue) {
      updateItem(id, editValue);
    } else {
      setEditValue(task);
    }
  };

  if (onEdit) {
    return (
      <li>
        <input type="text" id="editValue" value={editValue} name="editValue" onChange={(e) => setEditValue(e.target.value.toLowerCase())} />
        <button onClick={() => handleSave(id)}>Save</button>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id}>{task}</label>
        <button onClick={() => completedList(task, id)}>Completa</button>
        <button onClick={handleOnEdit}> Atualizar </button>
        <button onClick={() => removeFromList(id)}>Deletar</button>
      </li>
    );
  }
};

export default ListCard;
