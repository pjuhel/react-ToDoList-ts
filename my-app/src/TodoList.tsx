import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ( param ) => {
  const todos      = param.todos     ;
  const toggleTodo = param.toggleTodo;
  
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};