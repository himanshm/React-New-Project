import Input from './components/Input';
import Form from './components/Form';
import Button from './components/Button';

function App() {
  const saveHandler = function (data: unknown) {
    const extractedData = data as { username: string; age: string };
    console.log(extractedData);
  };
  return (
    <main>
      <Form onSave={saveHandler}>
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
