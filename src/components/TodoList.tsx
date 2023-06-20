import { TodoShow } from "./TodoShow";
import { TodoListProps } from "../types/TodoListType";
import { TodoListStyle } from "../Styled/todo.style";

export const TodoList = ({ todos, onDelete, onEdit }: TodoListProps) => {
  const renderedTodo = todos?.map(({ id, title, task }) => {
    return (
      <TodoShow
        key={id}
        title={title}
        id={id}
        task={task}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  });
  return <TodoListStyle>{renderedTodo}</TodoListStyle>;
};
