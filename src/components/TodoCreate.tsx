import { useState } from "react";
import { TodoCreateStyle, TodoCreateFormStyle } from "../Styled/todo.style";
import { useTodoContext } from "../hooks/useTodoContext";
import { TodoContextProps } from "../context/todo";

export const TodoCreate: React.FC = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");

  const { createTodo } = useTodoContext() as TodoContextProps;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(title, task);
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
