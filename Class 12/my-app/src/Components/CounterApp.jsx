import React, { useEffect, useState } from "react";

const CounterApp = () => {
    const[count, setCount] = useState(0)

    useEffect(()=>{
         console.log('counter app')
    },[])


    function increment(){
        setCount(count + 1)
    }
    
    function decrement(){
        
        setCount(count - 1)
    }

  return (
    <div>
       <button onClick={increment}>+</button>
       <p>{count}</p>
       <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterApp;
