import React, { useState } from 'react'
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
    id: 'test1' + new Date().getTime(),
  },
  {
    text: 'Write app',
    complete: true,
    id: 'test2' + new Date().getTime(),
  },
];

function App() {  
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const id = text + new Date().getTime()
    const newTodo = { text, complete: false, id: id };
    setTodos([...todos, newTodo]); 
  };

  const deleteTodo: DeleteTodo = (todoId: string) => {
    const newTodo = todos.filter(selectedItem => selectedItem.id !== todoId)
    setTodos(newTodo);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
