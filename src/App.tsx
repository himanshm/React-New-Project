import { useRef } from 'react';
import Input from './components/Input';

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input
        type='text'
        label='Test'
        id='test'
        ref={input}
      />
    </main>
  );
}

export default App;
