import React, { useState } from 'react';

const TodoList = () => {

  const [todos, setTodos] = useState([
    { text: 'Work', id: 1 },
    { text: 'Practice', id: 2 },
    { text: 'Debug', id: 3 }
  ]);

  const addTodo = () => {
    setTodos([...todos,
      { text: 'Complete Hooks', id: Math.random() }
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
      <button onClick={addTodo}>Add a todo</button>
    </div>
  )
};

export default TodoList;