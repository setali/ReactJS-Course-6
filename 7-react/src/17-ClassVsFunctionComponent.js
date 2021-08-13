// import { Component } from 'react'
import { useState } from 'react'

export default function FunctionComponent () {
  const [count, setCount] = useState(0)

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

// export default class ClassComponent extends Component {
//   state = {
//     count: 0
//   }

//   render () {
//     return (
//       <div>
//         {this.state.count}
//         <button onClick={() => this.setState(s => ({ count: s.count + 1 }))}>
//           +
//         </button>
//       </div>
//     )
//   }
// }
