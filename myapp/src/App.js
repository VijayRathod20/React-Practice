import './App.css';
import {useState} from 'react'


function App() {
  const [count, setCount] = useState(0);
    const plus = () => {
    setCount(count + 1);
    }
    const minus = () => {
      setCount(count - 1);
    }
    const zero = () => {
      setCount(0);
    }
  return (
    <div className="App">
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
      <button onClick={zero}>zero</button>
      <div>{count}</div>
    </div>
  );
}

export default App;
