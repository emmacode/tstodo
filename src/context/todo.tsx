// import { createContext, useState, useCallback } from "react";
// import { Todo } from "../types/TodoListType";

// interface TodoContextProviderProps {
//   children: React.ReactNode;
// }

// // interface TodoContextProps {
// //   todos: [];
// //   fetchTodos: () => void;
// //   editTodoById: (id: number, title: string, task: string) => void;
// //   deleteTodoById: (id: number) => void;
// //   createTodo: (title: string, task: string) => void;
// //   isLoading: boolean;
// // }

// export const TodoContext = createContext(null);

// export function TodoContextProvider({ children }: TodoContextProviderProps) {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchTodos = useCallback(async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch("http://localhost:4001/todo");
//       const todoData = await response.json();
//       setTodos(todoData);
//       setIsLoading(false);
//     } catch (error: any) {
//       //console.log(error.message, "fetch error");
//       setIsLoading(false);
//     }
//   }, []);

//   const editTodoById = async (id: number, title: string, task: string) => {
//     try {
//       const response = await fetch(`http://localhost:4001/todo/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({ title, task }),
//       });
//       const result = await response.json();
//       const updatedTodos = todos.map((todo) => {
//         if (todo.id === id) {
//           console.log(todo, "todo here");
//           return { ...todo, ...result };
//         }
//         return todo;
//       });
//       //console.log(updatedTodos, "updated");
//       setTodos(updatedTodos);
//     } catch (error: any) {
//       console.log(error, "edit error");
//     }
//   };

//   const deleteTodoById = async (id: number) => {
//     try {
//       await fetch(`http://localhost:4001/todo/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-type": "application/json",
//         },
//       });
//       const updatedTodos = todos.filter((todo) => {
//         return todo.id !== id;
//       });
//       setTodos(updatedTodos);
//     } catch (error: any) {
//       console.log(error, "Delete error");
//     }
//   };

//   const createTodo = async (title: string, task: string) => {
//     try {
//       const response = await fetch("http://localhost:4001/todo", {
//         method: "POST",
//         body: JSON.stringify({ title, task }),
//         headers: new Headers({
//           "Content-Type": "application/json",
//         }),
//       });
//       const result = await response.json();

//       //console.log(result, "result");
//       const updatedTodos = [...todos, result];
//       setTodos(updatedTodos);
//     } catch (error: any) {
//       console.log(error, "post Error");
//     }
//   };

//   const valueToShare = {
//     todos,
//     fetchTodos,
//     deleteTodoById,
//     editTodoById,
//     createTodo,
//     isLoading,
//   };

//   return (
//     <TodoContext.Provider value={valueToShare}>{children}</TodoContext.Provider>
//   );
// }
