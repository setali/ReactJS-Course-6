import { useState } from 'react'

function getInitialData () {
  return 999999n ** 99999n
}

export default function UseState () {
  //   const myState = useState(0)
  const [state, setState] = useState(getInitialData)
  const [count, setCount] = useState(10)

  return (
    <div>
      {/* Value: {state.toString()} */}
      <button onClick={() => setState(state + 1n)}>+</button>
      <hr />
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
  //   return (
  //     <div>
  //       Value: {myState[0]}
  //       <button onClick={() => myState[1](myState[0] + 1)}>+</button>
  //     </div>
  //   )
}
