import { useRef } from 'react';
import Form, { FormRef } from './UI/Form.tsx';
import Input from './UI/Input.tsx';
import Button from './UI/Button.tsx';

const AddTimer = function () {
  const form = useRef<FormRef>(null);

  const saveTimerHandler = function (data: unknown) {
    const extractedData = data as { name: string; duration: string };
    console.log(extractedData);
    form.current?.clear();
  };

  return (
    <Form
      ref={form}
      id='add-timer'
      onSave={saveTimerHandler}
    >
      <Input
        type='text'
        label='Name'
        id='name'
      />
      <Input
        type='number'
        label='Duration'
        id='duration'
      />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
};

export default AddTimer;
