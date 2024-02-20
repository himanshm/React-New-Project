import Input from './components/Input';
import Form, { type FormRef } from './components/Form';
import Button from './components/Button';
import { useRef } from 'react';

function App() {
  const customForm = useRef<FormRef>(null);

  const saveHandler = function (data: unknown) {
    // we use "Type Casting" (also called "Type Assertion") via TypeScript's as keyword to "tell" TypeScript that a value is of a specific type.
    // const extractedData = data as { username: string; age: string };
    // console.log(extractedData);

    // This is a technique that makes sense when working with data where TypeScript has no chance of inferring the type where you on the other hand know the exact type.

    //If you're not 100% sure about the type of value you'll be dealing with at runtime (i.e., if there are multiple possible value types) or if you want to be extra safe, you can also use a combination of "Type Guards" to narrow down the type until TypeScript is able to infer the final type.

    // Here's the code adjusted to use "Type Guards" for "Type Narrowing":
    if (
      !data ||
      typeof data !== 'object' ||
      !('name' in data) ||
      !('age' in data)
    ) {
      return;
    }

    // at this point, TypeScript knows that data MUST BE an object
    // with a name and age property
    // otherwise, the previous if statement would have returned
    console.log(data);
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
