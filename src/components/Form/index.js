import { useTasks } from "../../providers/tasks";
import { useState } from "react";
import { TiPencil } from "react-icons/ti";

import { FormStyle } from "./styles"

const Form = () => {
    const { addToList } = useTasks();
    const [taskValue, setTaskValue] = useState();

    return (
        <>
            <FormStyle autoComplete="off">
                <div>
                    <TiPencil/>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="Escreva aqui sua tarefa"
                        value={taskValue}
                        onChange={(event) =>
                            setTaskValue(event.target.value.toLowerCase())
                        }
                        required="required"
                    />
                </div>
                <button type="submit" onClick={() => addToList(taskValue)}>
                    Adicionar
                </button>
            </FormStyle>
        </>
    );
};

export default Form;
