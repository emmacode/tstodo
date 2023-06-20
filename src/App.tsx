import { useEffect } from "react";
import { TodoCreate } from "./components/TodoCreate";
import { TodoList } from "./components/TodoList";
import { useTodoContext } from "./hooks/useTodoContext";
import { TodoContextProps } from "./context/todo";

function App() {
  const { fetchTodos, isLoading } = useTodoContext() as TodoContextProps;

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      <TodoCreate />
      {isLoading ? <h1>Loading...</h1> : <TodoList />}
    </div>
  );
}

export default App;
