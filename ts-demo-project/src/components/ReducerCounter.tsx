import { useReducer } from "react"
import { counterReducer, CounterState } from "../reducer/counterReducer"

const initialState: CounterState ={count: 0}


const ReducerCounter = () => {
   const [state, dispatch] = useReducer(counterReducer, initialState)
   const increment =() =>dispatch({type: 'INCREMENT' })
   const decrement = () => dispatch({ type: 'DECREMENT'})
  
   return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default ReducerCounter