import React, { useState } from "react";

function Counter(){
  const [count, setCount] = useState(0)

  return(
    <div style={{ backgroundColor: 'blue', padding: '50px', color: '#e2e2e2' }}>
      <p>Current Count: {count}</p>
        <button style={{ marginRight: '10px', backgroundColor: '#e2e2e2', border: 'none' }} onClick={() => setCount(count + 1)}>Increment</button>
        <button style={{ backgroundColor: '#e2e2e2', border: 'none' }} onClick={() => setCount(count - 1)}>Decrement</button>
        <button style={{ marginLeft: '10px', backgroundColor: '#e2e2e2', border: 'none' }} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;