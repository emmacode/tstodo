import { useContext } from "react";
import { TodoContext, TodoContextProps } from "../context/todo";

export function useTodoContext(): TodoContextProps | null{
    return useContext(TodoContext);
}