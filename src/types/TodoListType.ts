export interface TodoListProps {
    todos: Todo[];
    onDelete: (id: number) => void;
    onEdit: (id: number, title: string, task: string)=> void;
}

export interface Todo {
    id?: number;
    title: string;
    task: string;
    onDelete: (id: number) => void;
    onEdit: (id: number, title: string, task: string)=> void;
    onSubmit?: ()=> void
}

export interface TodoEditProps {
    id?: number;
    title: string;
    task: string;
    onEdit: (id: number, title: string, task: string)=> void;
    onSubmit: ()=> void
}