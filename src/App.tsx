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
        <Button el='anchor'>Submit</Button>
      </p>
      <p>
        <Button el='button'>Reset</Button>
      </p>
    </main>
  );
}

export default App;
