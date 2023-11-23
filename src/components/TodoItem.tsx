import { useContext } from 'react';

import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FaTrash } from 'react-icons/fa';

import { TodoContext } from '../store//store';
import { type Todo } from '../../types/todo';

type TodoProps = {
  todo: Todo;
};

const TodoItem: React.FC<TodoProps> = ({ todo }) => {
  const todosCtx = useContext(TodoContext);
  const { id, text, date, done } = todo;

  const deleteHandler = () => {
    todosCtx.removeTodo(id);
  };

  const toggleTodoHandler = () => {
    todosCtx.toggleTodo(id);
  };

  const fontColor = { color: done ? 'grey' : 'inherit' };

  return (
    <li>
      <Card>
        <Stack direction='horizontal' className='p-2' style={fontColor}>
          <Form.Check checked={done} onChange={toggleTodoHandler} />
          <div className='p-2'>{text}</div>
          <div className='p-2 ms-auto'>{date}</div>
          <Button
            variant='warning'
            onClick={deleteHandler}
            style={{ padding: `2px 9px 6px 9px` }}>
            <FaTrash />
          </Button>
        </Stack>
      </Card>
    </li>
  );
};
export default TodoItem;
