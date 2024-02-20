import { IconButton } from './components/IconButton';

function App() {
  function HeartIcon() {
    return <span>❤️</span>;
  }
  return (
    <main>
      <IconButton
        icon={HeartIcon}
        onClick={() => console.log('Button clicked!')}
      >
        Like
      </IconButton>
    </main>
  );
}

export default App;
