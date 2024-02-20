import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <main>
      <Input
        label='Your Name'
        id='name'
        type='text'
      />
      <Input
        label='Your Age'
        id='age'
        type='number'
      />
      <p>
        <Button>Submit</Button>
      </p>
      <p>
        <Button href='https://google.com'>Reset</Button>
      </p>
    </main>
  );
}

export default App;
