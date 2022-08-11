import { useTasks } from "../../providers/tasks";
import { useState } from "react";

import { Container, LiEdit } from "./styles";

import {
    AiOutlineCarryOut,
    AiOutlineCheck,
    AiOutlineEdit,
} from "react-icons/ai";
import { TbTrashX } from "react-icons/tb";

const ListCard = ({ task, id }) => {
    const { removeFromList, completedList, updateItem, valueButton } =
        useTasks();

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
            <LiEdit>
                <input
                    type="text"
                    id="editValue"
                    value={editValue}
                    name="editValue"
                    onChange={(e) => setEditValue(e.target.value.toLowerCase())}
                />
                <button
                    name="salvar edição tarefa"
                    onClick={() => handleSave(id)}
                >

                    <AiOutlineCheck />
                </button>
            </LiEdit>
        );
    } else {
        if (valueButton === "Concluidas") {
            return (
                <Container className={valueButton}>
                    <AiOutlineCarryOut />
                    <hr />
                    <label htmlFor={id}>{task}</label>
                </Container>
            );
        }
        return (
            <Container className={valueButton}>
            
                    <label htmlFor={id}>{task}</label>
                    <hr />
             
                <div>
                    <button
                        name="concluir tarefa"
                        onClick={() => completedList(task, id)}
                    >Salvar
                        <AiOutlineCheck />
                    </button>
                    <button name="editar tarefa" onClick={handleOnEdit}>
                      Editar  <AiOutlineEdit />
                    </button>
                    <button
                        name="excluir tarefa"
                        onClick={() => removeFromList(id)}
                    >Excluir
                        <TbTrashX />
                    </button>
                </div>
            </Container>
        );
    }
};

export default ListCard;
