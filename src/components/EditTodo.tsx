import { useState } from "react";
import { Todo } from "../types/TodoListType";
import { useTodoContext } from "../hooks/useTodoContext";
import { TodoContextProps } from "../context/todo";

interface EditTodoProps {
  todo: Todo;
  onSubmit: () => void;
}

export const EditTodo = ({ onSubmit, todo }: EditTodoProps) => {
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editTask, setEditTask] = useState(todo.task);

  const { editTodoById } = useTodoContext() as TodoContextProps;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.id) {
      editTodoById(todo.id, editTitle, editTask);
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
        />
      </div>

      <div>
        <button>Save</button>
      </div>
    </form>
  );
};
