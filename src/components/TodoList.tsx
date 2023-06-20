import { TodoShow } from "./TodoShow";
import { TodoListStyle } from "../Styled/todo.style";
import { useTodoContext } from "../hooks/useTodoContext";
import { TodoContextProps } from "../context/todo";

export const TodoList = () => {
  const { todos } = useTodoContext() as TodoContextProps;
  const renderedTodo = todos?.map((todo) => {
    return (
      <TodoShow
        key={todo.id}
        todo={todo}
        // title={title}
        // id={id}
        // task={task}
        // onDelete={onDelete}
        // onEdit={onEdit}
      />
    );
  });
  return <TodoListStyle>{renderedTodo}</TodoListStyle>;
};
