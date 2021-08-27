import React, { useEffect, useState, useCallback } from 'react'

export default function UseCallback () {
  const [count, setCount] = useState(0)
  const [height, setHeight] = useState()

  useEffect(() => {
    setInterval(() => setCount(s => s + 1), 1000)
  }, [])

  const myInput = useCallback(node => {
    node?.focus()
  }, [])

  const myHeight = useCallback(node => {
    node && setHeight(node.getBoundingClientRect().height.toFixed(2))
  }, [])

  return (
    <div>
      Count: {count}
      <hr />
      <h2 ref={myHeight} style={{ backgroundColor: 'aqua' }}>
        Hello
      </h2>
      Height: {height}
      <hr />
      <input ref={myInput} />
    </div>
  )
}
