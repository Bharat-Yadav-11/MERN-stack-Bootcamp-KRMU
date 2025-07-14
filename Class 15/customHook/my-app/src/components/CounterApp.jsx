import React from 'react'
import useCounter from '../hook/useCounter'

const CounterApp = () => {
    const {count, Increment, Decrement} = useCounter()

    
  return (
   <div>
     <div>CounterApp 1....</div>
     <button onClick={Increment} >Increment</button>
     <p>{count}</p>
     <button onClick={Decrement}>Decrement</button>
   </div>
  )
}

export default CounterApp