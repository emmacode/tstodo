import { Todo } from "../types/TodoListType";
import { TodoShowStyle, TodoActionStyle } from "../Styled/todo.style";
import { useState } from "react";
import { EditTodo } from "./EditTodo";

export const TodoShow = ({ title, task, id, onDelete, onEdit }: Todo) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    if (id) {
      onDelete(id);
    }
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <span>{title}</span>;
  if (showEdit) {
    content = (
      <EditTodo
        id={id}
        title={title}
        task={task}
        onEdit={onEdit}
        onSubmit={handleSubmit}
      />
    );
  }

  return (
    <TodoShowStyle>
      <h2>{content}</h2>
      <p>{task}</p>
      <TodoActionStyle>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </TodoActionStyle>
    </TodoShowStyle>
  );
};
