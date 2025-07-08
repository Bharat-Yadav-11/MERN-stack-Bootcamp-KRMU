import React, { useState } from "react";

 
const Counter = () => {
  // let count = 0

  const [count, setCount] = useState(0);

  function increment() {
    // count++
    setCount(count + 1);
    console.log(count);
  }

  function decrement() {
    // count--
    setCount(count - 1);
    console.log(count);
  }

  function resetHandler() {
    // count = 0
    setCount(0);
    console.log(count);
  }

  return (
    <div>
      <h1>Counter App</h1>

      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <br />
      <br />
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Counter;
