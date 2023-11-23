import { createContext, useState, useEffect } from 'react';
import { type Todo } from '../types/todo';

type TodoContext = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export const todoContext = createContext<TodoContext>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
});
