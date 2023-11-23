import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';


type InputFormProps = {
  addTodo: (text: string) => void;
};

const InputForm: React.FC<InputFormProps> = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const onInputTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setTodoText(text);
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (todoText.trim() !== '' && todoText.length > 3 && isNaN(+todoText)) {
      addTodo(todoText);
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
