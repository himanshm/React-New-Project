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
    </main>
  );
}

export default App;
