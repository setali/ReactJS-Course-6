import { useState } from 'react'

export default function CustomHook () {
  const username = useField('')
  const password = useField('')

  return (
    <div>
      <form>
        <input type='text' placeholder='username' {...username} />
        <input type='text' placeholder='password' {...password} />
      </form>
    </div>
  )
}

function useField (defaultValue) {
  const [value, setValue] = useState(defaultValue)

  return {
    value,
    onChange: e => setValue(e.target.value)
  }
}

// export default function CustomHook () {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   return (
//     <div>
//       <form>
//         <input
//           type='text'
//           placeholder='username'
//           value={username}
//           onChange={e => setUsername(e.target.value)}
//         />
//         <input
//           type='text'
//           placeholder='password'
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />
//       </form>
//     </div>
//   )
// }
