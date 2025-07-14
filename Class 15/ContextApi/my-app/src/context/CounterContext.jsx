import { createContext, useState } from "react";

export const counterContext = createContext();

export function CounterContextProvider({ children}) {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  const value = {
    count,
    setCount,
    Increment,
    Decrement,
  };

  return <counterContext.Provider value={value}>
            {children}
  </counterContext.Provider>
}


 