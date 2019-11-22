import React, { useState, useEffect } from 'react';
import AddTodoBar from '../AddTodoBar/AddTodoBar';
import TodoList from '../TodoList/TodoList';
import Todo from '../Todo/Todo';
import TrashButton from '../TrashButton/TrashButton';
import CheckMark from '../CheckMark/CheckMark';
import TodoTitle from '../TodoTitle/TodoTitle';

function Todos() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('onmount');
    setTodos(
      [
        {
          title: 'todo1',
          done: false
        },
        {
          title: 'todo2',
          done: false
        },
        {
          title: 'todo3',
          done: false
        }
      ]
    );
  }, [])

  function addTodo(title) {
    setTodos([...todos, {title:title, done: false}]);
  }

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function toggleTodo(index) {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  return (
    <div className="Todos">
      <h1>TODOS</h1>
      <AddTodoBar onAdd={addTodo} />
      <TodoList>
        <ul>
          {todos.map((todo, index) => 
            <li key={index}>
              <Todo>
                <TodoTitle checked={todo.done} title={todo.title} />
                <TrashButton onClick={() => deleteTodo(index)} />
                <CheckMark checked={todo.done} onClick={() => toggleTodo(index)} />
              </Todo>
            </li>
          )}
        </ul>
      </TodoList>
    </div>
  );

}

export default Todos;
