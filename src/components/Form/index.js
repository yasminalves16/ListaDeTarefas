import { useTasks } from "../../providers/tasks";
import { useState } from "react";

const Form = () => {
  const { addToList } = useTasks();
  const [taskValue, setTaskValue] = useState();

  return (
    <>
      <form autoComplete="off">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que temos para fazer ?"
          value={taskValue}
          onChange={(event) => setTaskValue(event.target.value.toLowerCase())}
          required
        />
        <button type="submit" onClick={() => addToList(taskValue)}>
          Adicionar task
        </button>
      </form>
    </>
  );
};

export default Form;
