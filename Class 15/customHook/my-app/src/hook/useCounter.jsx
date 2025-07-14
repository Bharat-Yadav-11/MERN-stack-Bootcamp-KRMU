import { useState } from "react"

function useCounter(x{

    const[count, setCount] = useState()

    function Increment(){
        setCount(count+1)
    }

    function Decrement(){
        setCount(count-1)
    }

    return {Increment, Decrement, count , setCount}

}

export default useCounter