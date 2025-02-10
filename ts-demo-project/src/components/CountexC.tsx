import { useState } from "react"


const CountexC = () => {
    const [count,setCount] = useState<number>(0)
  return (
    <div>
        <h1>counter app</h1>
        <h2>Counter: {count}</h2>
        <button onClick={() =>setCount(count+1)}>Increment</button>
        <button onClick={() =>setCount(count-1)}>Decrement </button>
    </div>
  )
}

export default CountexC