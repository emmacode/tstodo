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
      {isLoading ? <h1>Loading...</h1> : <TodoList />}
      <TodoCreate />
    </div>
  );
}

export default App;
