import { useState, useEffect } from 'react'

export default function Counter () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count + 1)
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  console.log('render', count)

  return <div>{count}</div>
}
