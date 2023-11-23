import { useContext } from 'react';

import Stack from 'react-bootstrap/Stack';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import { TodoContext } from './store/store';

function App() {
  const todosCtx = useContext(TodoContext);

  const allTodos = todosCtx.todos;

  const actualTodos = allTodos.filter((todo) => todo.done === false);
  const doneTodos = allTodos.filter((todo) => todo.done === true);

  return (
    <Stack gap={2} className='col-md-5 mx-auto'>
      <h1 className='mx-auto'>TodoList App</h1>
      <InputForm />
      <hr />
      {actualTodos.length > 0 && <TodoList todos={actualTodos} />}

      {doneTodos.length > 0 && (
        <>
          <h2>Done</h2>
          <TodoList todos={doneTodos} />
        </>
      )}
    </Stack>
  );
}

export default App;
