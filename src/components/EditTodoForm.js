import { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [inputValue, setInputValue] = useState(task.task);

  const inputHandler = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    // To add todo task
    editTodo(inputValue, task.id);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update task"
        className="todo-input"
        value={inputValue}
        onChange={inputHandler}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default EditTodoForm;
