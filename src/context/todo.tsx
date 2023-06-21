import { createContext, useState, useCallback } from "react";
import { Todo } from "../types/TodoListType";

interface TodoContextProviderProps {
  children: React.ReactNode;
}

export interface TodoContextProps {
  todos: Todo[];
  fetchTodos: () => void;
  editTodoById: (id: number, title: string, task: string) => void;
  deleteTodoById: (id: number) => void;
  createTodo: (title: string, task: string) => void;
  isLoading: boolean;
  isNetworkError: boolean;
  isFetchError: string;
  isCreateError: string;
  isEditError: string;
}

export const TodoContext = createContext<TodoContextProps | null>(null);

export function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNetworkError, setIsNetworkError] = useState(false);
  const [isFetchError, setIsFetchError] = useState("");
  const [isCreateError, setIsCreateError] = useState("");
  const [isEditError, setIsEditError] = useState("");

  const fetchTodos = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4001/todo");
      if (!response.ok) {
        throw Error("Could not fetch the data");
      }
      const todoData = await response.json();
      setTodos(todoData);
      setIsLoading(false);
      //setIsNetworkError(false);
      //setIsFetchError("");
    } catch (error: any) {
      setIsLoading(false);
      setIsNetworkError(true);
      setIsFetchError(error.message);
    }
  }, []);

  const editTodoById = async (id: number, title: string, task: string) => {
    try {
      const response = await fetch(`http://localhost:4001/todo/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, task }),
      });
      if (!response.ok) {
        throw Error("Could not update the data");
      }
      const result = await response.json();
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...result };
        }
        return todo;
      });
      setTodos(updatedTodos);
    } catch (error: any) {
      console.log(error, "edit error");
      setIsEditError(error.message);
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

  const createTodo = async (title: string, task: string) => {
    try {
      const response = await fetch("http://localhost:4001/todo", {
        method: "POST",
        body: JSON.stringify({ title, task }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      if (!response.ok) {
        throw Error("There was an error adding data");
      }
      const result = await response.json();
      const updatedTodos = [...todos, result];
      setTodos(updatedTodos);
    } catch (error: any) {
      setIsCreateError(error.message);
    }
  };

  const valueToShare = {
    todos,
    fetchTodos,
    deleteTodoById,
    editTodoById,
    createTodo,
    isLoading,
    isNetworkError,
    isFetchError,
    isCreateError,
    isEditError,
  };

  return (
    <TodoContext.Provider value={valueToShare}>{children}</TodoContext.Provider>
  );
}
