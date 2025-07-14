import React, { useContext } from "react";
import { counterContext } from "../context/CounterContext";

const CounterApp2 = () => {
  const { count, setCount, Increment, Decrement } = useContext(counterContext);

  return (
    <div>
      <div>CounterApp 2 ....</div>
      <button onClick={Increment}>Increment</button>
      <p>{count}</p>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default CounterApp2;
