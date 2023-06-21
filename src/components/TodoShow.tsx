import { Todo } from "../types/TodoListType";
import { TodoShowStyle, TodoActionStyle } from "../Styled/todo.style";
import { useState } from "react";
import { EditTodo } from "./EditTodo";
import { useTodoContext } from "../hooks/useTodoContext";
import { TodoContextProps } from "../context/todo";
interface TodoShowProps {
  todo: Todo;
}

export const TodoShow = ({ todo }: TodoShowProps) => {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteTodoById } = useTodoContext() as TodoContextProps;

  const handleDeleteClick = () => {
    deleteTodoById(todo.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <span>{todo.title}</span>;
  if (showEdit) {
    content = <EditTodo todo={todo} onSubmit={handleSubmit} />;
  }

  return (
    <TodoShowStyle>
      <h2>{content}</h2>
      <p>{todo.task}</p>
      <TodoActionStyle>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </TodoActionStyle>
    </TodoShowStyle>
  );
};
