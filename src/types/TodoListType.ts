export interface Todo {
    id?: number;
    title: string;
    task: string;

    onDelete: (id: number) => void;
    onEdit: (id: number, title: string, task: string)=> void;
    onSubmit?: ()=> void
}