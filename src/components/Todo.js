import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  // To delete todo task
  const deletTodoHandler = () => deleteTodo(task.id);

  // To edit todo task
  const editTodoHandler = () => editTodo(task.id);

  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={editTodoHandler} />
        <FontAwesomeIcon icon={faTrash} onClick={deletTodoHandler} />
      </div>
    </div>
  );
};

export default Todo;
