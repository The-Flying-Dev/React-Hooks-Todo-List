import React, { useState, useEffect } from 'react';
import AddNewTodo from './AddNewTodo';

const TodoList = () => {

  //create useState
  const [todos, setTodos] = useState([
    { text: 'Work', id: 1 },
    { text: 'Practice', id: 2 },
    { text: 'Debug', id: 3 }
  ]);

  const [count, setCount] = useState(0);

  //deconstruct then set
  const addTodo = (text) => {
    setTodos([...todos,
      { text, id: Math.random() }
    ]);
  };

  useEffect(() => {
    console.log('use effect', todos);
  }, [todos]);

  useEffect(() => {
    console.log('use effect', count);
  }, [count]);

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
      <button onClick={() => setCount(count + 1)}>Score: {count}</button>
    </div>
  )
};

export default TodoList;