import { TodoShow } from "./TodoShow";
import { TodoListStyle } from "../Styled/todo.style";
import { useTodoContext } from "../hooks/useTodoContext";
import { TodoContextProps } from "../context/todo";

export const TodoList = () => {
  const { todos } = useTodoContext() as TodoContextProps;

  const renderedTodo = todos?.map((todo) => {
    return <TodoShow key={todo.id} todo={todo} />;
  });

  return (
    <>
      {todos.length === 0 ? (
        <h1>Empty List</h1>
      ) : (
        <TodoListStyle>{renderedTodo}</TodoListStyle>
      )}
    </>
  );
};
