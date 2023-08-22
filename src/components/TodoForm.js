import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    // To add todo task
    addTodo(inputValue);

    // To clear input field
    setInputValue("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is the task today?"
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

export default TodoForm;
