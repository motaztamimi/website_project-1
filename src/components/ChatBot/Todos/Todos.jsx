/** @format */

import React, { useEffect } from 'react';
import './Todos.css';
const Todos = (props) => {
  const { setState } = props;
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        const moredata = data.slice(0, 6);
        setState((state) => ({ ...state, todos: moredata }));
      });
  }, []);
  console.log(props.todos);
  const renderTodos = () => {
    return props.todos.map((todo) => {
      return <li key={todo.id}> {todo.title}</li>;
    });
  };
  return (
    <div className='gg'>
      <ul> {renderTodos()}</ul>
    </div>
  );
};

export default Todos;
