import { useState, useReducer } from 'react'

const defaultState = 0

function reducer (state, { type, payload }) {
  switch (type) {
    case 'ADD':
      return state + (payload || 1)

    case 'SUB':
      return state - (payload || 1)

    case 'RESET':
      return defaultState

    default:
      return state
  }
}

export default function UseReducer () {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const [count, setCount] = useState(0)

  return (
    <div>
      State: {state}
      <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 2 })}>+2</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 3 })}>+3</button>
      <button onClick={() => dispatch({ type: 'SUB' })}>-</button>
      <button onClick={() => dispatch({ type: 'SUB', payload: 5 })}>-5</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
      <hr />
      {count}
      <button onClick={() => setCount(s => s + 1)}>+</button>
    </div>
  )
}
