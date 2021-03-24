import React, { useState, useContext, useRef } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { MyContext } from '../context/index';

const Start = () => {
  const textInput = useRef(null);
  const context = useContext(MyContext);
  const [error, setError] = useState([false, '']);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    if (validate) {
      console.log(value);
    } else {
      console.log('error');
    }
  };

  const validateInput = (value) => {
    if (value === '') {
      setError([true, 'Sorry, you need to add something']);
      return false;
    } else if (value <= 2) {
      setError([true, 'Sorry, you need to type at least 3 char']);
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <Form className='mt-4' onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Add player'
            name='player'
            ref={textInput}
          />
        </Form.Group>
        <Button variant='primary' className='miami' type='submit'>
          Add player
        </Button>
      </Form>
    </>
  );
};

export default Start;
