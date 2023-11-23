import React, { createContext, useState, useEffect } from 'react';
import { type Todo } from '../../types/todo';
import { v4 as uuidv4 } from 'uuid';

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

interface Props {
  children: React.ReactNode;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
});

const TodoContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
    setTodos((todos) => [
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
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    const todo = newTodos[todoIndex];
    todo.done = !todo.done;
    newTodos[todoIndex] = todo;
    setTodos(newTodos);
  };

  const removeTodo = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
