import { useState } from "react";
import { TodoCreateStyle, TodoCreateFormStyle } from "../Styled/todo.style";

interface CreateTodoProps {
  onCreate: (title: string, task: string) => void;
}

export const TodoCreate: React.FC<CreateTodoProps> = ({
  onCreate,
}: CreateTodoProps) => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(title, task);
    setTitle("");
    setTask("");
  };

  return (
    <TodoCreateStyle>
      <TodoCreateFormStyle onSubmit={handleSubmit}>
        <h2>Add Task</h2>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>

        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Task"
          />
        </div>

        <div>
          <button>Create</button>
        </div>
      </TodoCreateFormStyle>
    </TodoCreateStyle>
  );
};
