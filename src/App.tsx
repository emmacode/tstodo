import { useEffect } from "react";
import { TodoCreate } from "./components/TodoCreate";
import { TodoList } from "./components/TodoList";
import { useTodoContext } from "./hooks/useTodoContext";
import { TodoContextProps } from "./context/todo";
import { NetworkStyle, AppStyle, RetryButton } from "./Styled/todo.style";
import { CircularIndeterminate } from "./components/Progress";
import { useNavigate } from "react-router-dom";

function App() {
  const { fetchTodos, isNetworkError, isLoading, isFetchError, isEditError } =
    useTodoContext() as TodoContextProps;

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  return (
    <div>
      <TodoCreate />
      {isNetworkError ? (
        <NetworkStyle>
          <p>Network Error</p>
          <RetryButton onClick={refreshPage}>Try again</RetryButton>
        </NetworkStyle>
      ) : (
        <AppStyle>
          {isFetchError && <div>{isFetchError}</div>}
          {isEditError && <div>{isEditError}</div>}
          {isLoading ? <CircularIndeterminate /> : <TodoList />}
        </AppStyle>
      )}
    </div>
  );
}

export default App;
