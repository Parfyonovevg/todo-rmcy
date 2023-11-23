import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FaTrash } from 'react-icons/fa';

import { type Todo } from '../../types/todo';

type TodoProps = {
  todo: Todo;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

const TodoItem: React.FC<TodoProps> = ({ todo, deleteTodo, toggleTodo }) => {
  const { id, text, date, done } = todo;

  const deleteHandler = () => {
    deleteTodo(id);
  };

  const toggleTodoHandler = () => {
    toggleTodo(id);
  };

  const fontColor = { color: done ? 'grey' : 'inherit' };

  return (
    <li>
      <Card>
        <Stack direction='horizontal' className='p-2' style={fontColor}>
          <Form.Check onChange={toggleTodoHandler} checked={done} />
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
