import logo from './logo.svg';
import './App.css';
import Generator from './components/ButtonGen'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Quote Generator</h1>
      </header>
      
      <Generator/>
    </div>
  );
}

export default App;
