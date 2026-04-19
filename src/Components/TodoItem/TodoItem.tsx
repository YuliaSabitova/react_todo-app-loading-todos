import { Todo } from "../../types/Todo";
import "../../styles/todo.scss";
import { Loader } from "../Loader/Loader";

type Props = {
  todo: Todo;
}

export const TodoItem: React.FC<Props> = ({todo}) => {
  return (
    <div
      data-cy="Todo"
      className={`todo ${todo.completed ? 'completed' : ''}`}
    >
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={todo.completed}
          readOnly
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {todo.title}
      </span>

      <button type="button" className="todo__remove" data-cy="TodoDelete">
        ×
      </button>

      <Loader />

    </div>
  );
};

