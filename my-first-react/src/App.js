import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
        <h1>Simple Counter</h1>
        <p>Count Value: {count}</p >

        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </>
  )
}

export default App;

// useEffect: when you take data from external database, use me