import React, { useState } from 'react';
import AddNewTodo from './AddNewTodo';

const TodoList = () => {

  const [todos, setTodos] = useState([
    { text: 'Work', id: 1 },
    { text: 'Practice', id: 2 },
    { text: 'Debug', id: 3 }
  ]);

  const addTodo = (text) => {
    setTodos([...todos,
      { text, id: Math.random() }
    ]);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>{todo.text}</li>
          )
        })}
      </ul>
      <AddNewTodo addTodo={addTodo} />
    </div>
  )
};

export default TodoList;