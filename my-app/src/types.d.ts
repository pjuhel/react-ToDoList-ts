interface Todo{
    text: string;
    complete: boolean;
    id: string;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;
type DeleteTodo = (todoId: string) => void;