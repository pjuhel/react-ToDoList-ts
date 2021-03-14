import React from "react";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<Props> = (param) => {
  const todo       = param.todo      ;
  const toggleTodo = param.toggleTodo;
  const deleteTodo = param.deleteTodo;
  const labelStyle = {textDecoration: todo.complete ? "line-through" : undefined};

  return (
    <li>
      <label style={labelStyle} >
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
          readOnly
        /> 
        {' '}
        {todo.text}
        {' '}
        {' '}
        <button
        type="submit"
        onClick={event => {
          event.preventDefault();
          deleteTodo(todo.id);
        }}
        >
        X
        </button>  
      </label>
    </li>
  );
};
