import React, { useState } from 'react';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = (param) => {
  //const { addTodo } = param;
  const addTodo         = param.addTodo;
  const [text, setText] = useState('') ;

  return (
    <form>
      <input
        value={text}
        type="text"
        onChange={event => {
          setText(event.target.value);
        }}
      />
      <button
        type="submit"
        onClick={event => {
          event.preventDefault();
          addTodo(text);
          setText('');
        }}
      >
      Add Todo
      </button>
    </form>
  );
};