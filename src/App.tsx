import Input from './components/Input';
import Form, { type FormRef } from './components/Form';
import Button from './components/Button';
import { useRef } from 'react';

function App() {
  const customForm = useRef<FormRef>(null);

  const saveHandler = function (data: unknown) {
    const extractedData = data as { username: string; age: string };
    console.log(extractedData);
    // Clear the form using refs
    customForm.current?.clear();
  };
  return (
    <main>
      <Form
        onSave={saveHandler}
        ref={customForm}
      >
        <Input
          label='User Name'
          type='text'
          id='username'
        />
        <Input
          label='Age'
          type='text'
          id='age'
        />
        <p>
          <Button>Submit</Button>
        </p>
      </Form>
    </main>
  );
}

// type prop only affect how the value will be presented, it doesn't affect how it will be extracted. The value extracted by input element will always be a string

export default App;
