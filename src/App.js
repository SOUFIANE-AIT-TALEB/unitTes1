import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount]= useState(0);
  const increment = ()=>{
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Hello DEVOWFS</h1>
      <button data-testid="button1" onClick={increment}>Click Me</button>
      <button>Click Me to</button>
      <p>Count : {count} </p>
    </div>
  );
}

export default App;
