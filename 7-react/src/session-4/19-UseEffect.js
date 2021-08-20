import React, { useState, useEffect } from 'react'

export default function App () {
  const [show, setShow] = useState(true)
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? 'Hide' : 'Show'}
      </button>
      {/* <div style={{ display: show ? 'block' : 'none' }}>
        <MyComponent />
      </div> */}
      {show && <MyComponent />}
    </div>
  )
}

function MyComponent () {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  // cDM, cDU, cWU
  useEffect(() => {
    const timeoutId = setTimeout(() => setCounter(counter + 1), 1000)
    console.log('Mount id', timeoutId, counter)

    return () => {
      console.log('UnMount id', timeoutId, counter)
      clearTimeout(timeoutId)
    }
  }, [counter])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users', { signal })
      .then(reponse => reponse.json())
      .then(data => setUsers(data))
      .finally(() => setLoading(false))

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div>
      {loading ? (
        'Loading ....'
      ) : (
        <ol>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ol>
      )}
      <h3>Counter: {counter}</h3>
    </div>
  )
}
