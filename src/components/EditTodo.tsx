import { useState } from "react";
import { TodoEditProps } from "../types/TodoListType";

export const EditTodo = ({
  id,
  title,
  task,
  onSubmit,
  onEdit,
}: TodoEditProps) => {
  const [editTitle, setEditTitle] = useState(title);
  const [editTask, setEditTask] = useState(task);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      onEdit(id, editTitle, editTask);
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
