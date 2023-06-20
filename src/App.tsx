import { useCallback, useEffect, useState } from "react";
import { TodoCreate } from "./components/TodoCreate";
import { TodoList } from "./components/TodoList";
import { Todo } from "./types/TodoListType";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4001/todo");
      const todoData = await response.json();
      setTodos(todoData);
      setIsLoading(false);
    } catch (error: any) {
      //console.log(error.message, "fetch error");
      setIsLoading(false);
    }
  }, []);

  //console.log(todos, "todo");

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const createTodo = async (title: string, task: string) => {
    try {
      const response = await fetch("http://localhost:4001/todo", {
        method: "POST",
        body: JSON.stringify({ title, task }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      const result = await response.json();

      //console.log(result, "result");
      const updatedTodos = [...todos, result];
      setTodos(updatedTodos);
    } catch (error: any) {
      console.log(error, "post Error");
    }
  };

  const editTodoById = async (id: number, title: string, task: string) => {
    try {
      const response = await fetch(`http://localhost:4001/todo/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, task }),
      });
      const result = await response.json();
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          console.log(todo, "todo here");
          return { ...todo, ...result };
        }
        return todo;
      });
      //console.log(updatedTodos, "updated");
      setTodos(updatedTodos);
    } catch (error: any) {
      console.log(error, "edit error");
    }
  };

  const deleteTodoById = async (id: number) => {
    try {
      await fetch(`http://localhost:4001/todo/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const updatedTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(updatedTodos);
    } catch (error: any) {
      console.log(error, "Delete error");
    }
  };

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <TodoList
          todos={todos}
          onEdit={editTodoById}
          onDelete={deleteTodoById}
        />
      )}
      <TodoCreate onCreate={createTodo} />
    </div>
  );
}

export default App;
