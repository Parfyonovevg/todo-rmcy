import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

import { TodoContext } from '../store/store';

const InputForm: React.FC = () => {
  const [todoText, setTodoText] = useState('');
  const todosCtx = useContext(TodoContext);

  const onInputTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setTodoText(text);
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (todoText.trim() !== '' && todoText.length > 3 && isNaN(+todoText)) {
      todosCtx.addTodo(todoText);
      setTodoText('');
    } else {
      return alert('Invalid input');
    }
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Stack direction='horizontal' gap={3}>
        <Form.Control
          className='me-auto'
          placeholder='New task'
          onChange={onInputTextHandler}
          value={todoText}
        />
        <Button type='submit' variant='primary'>
          +
        </Button>
      </Stack>
    </Form>
  );
};

export default InputForm;
