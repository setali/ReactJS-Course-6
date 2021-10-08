import React, { useState } from 'react'

function Counter () {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h3>My Counter</h3>
      <span data-testid='counter-value'>{counter}</span>
      <button onClick={() => setCounter(s => s + 1)}>Increment</button>
    </div>
  )
}

export default Counter
