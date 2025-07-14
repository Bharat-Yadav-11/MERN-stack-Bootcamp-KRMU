import React, { useContext } from "react";
import { counterContext } from "../context/CounterContext";

const CounterApp = () => {
  const { count, setCount, Increment, Decrement } = useContext(counterContext);

  return (
    <div>
      <div>CounterApp....</div>
      <button onClick={Increment}>Increment</button>
      <p>{count}</p>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default CounterApp;
