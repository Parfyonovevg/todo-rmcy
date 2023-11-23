import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Stack from 'react-bootstrap/Stack';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import { Todo } from '../types/todo';

function App() {
  const [allTodos, setAllTodos] = useState<Todo[]>(() => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(allTodos));
  }, [allTodos]);

  const actualTodos = allTodos.filter((todo) => todo.done === false);
  const doneTodos = allTodos.filter((todo) => todo.done === true);

  const addTodo = (text: string) => {
    const day = `${new Date().getDate()}`;
    const month = `${new Date().getMonth() + 1}`;
    const year = `${new Date().getFullYear()}`;
    const hours = `${new Date().getHours()}`;
    let minutes = `${new Date().getMinutes()}`;
    if (+minutes < 10) {
      minutes = `0${minutes}`;
    }
    console.log(minutes);
    setAllTodos((todos) => [
      ...todos,
      {
        id: uuidv4(),
        text,
        date: `${day}-${month}-${year} ${hours}:${minutes}`,
        done: false,
      },
    ]);
  };

  const toggleTodo = (id: string) => {
    const todoIndex = allTodos.findIndex((todo) => todo.id === id);
    const newTodos = [...allTodos];
    const todo = newTodos[todoIndex];
    todo.done = !todo.done;
    newTodos[todoIndex] = todo;
    setAllTodos(newTodos);
  };

  const deleteTodo = (id: string) => {
    setAllTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <Stack gap={2} className='col-md-5 mx-auto'>
      <h1 className='mx-auto'>TodoList App</h1>
      <InputForm addTodo={addTodo} />
      <hr />
      {actualTodos.length > 0 && (
        <TodoList
          todos={actualTodos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      )}

      {doneTodos.length > 0 && (
        <>
          <h2>Done</h2>
          <TodoList
            todos={doneTodos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        </>
      )}
    </Stack>
  );
}

export default App;
