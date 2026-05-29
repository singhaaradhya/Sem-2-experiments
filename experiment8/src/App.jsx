import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (

    <div className="container">

      <h1>React Counter App</h1>

      <h2>{count}</h2>

      <button onClick={increment}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>

      <button onClick={reset}>
        Reset
      </button>

    </div>

  );

}

export default App;