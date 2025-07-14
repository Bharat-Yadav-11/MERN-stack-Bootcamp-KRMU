import React from 'react'
import useCounter from '../hook/useCounter'

const NewCounterApp = () => {
       const {count, Increment, Decrement, setCount} = useCounter()

        function resetHandler(){
            setCount(0)
        }

  return (
   <>
     <div>CounterApp 2.....</div>
     <button onClick={()=>Increment(count)} >Increment</button>
     <p>{count}</p>
     <button onClick={()=>Decrement(count)}>Decrement</button>
     <button onClick={resetHandler}>Reset</button>

   </>
  )
}

export default NewCounterApp