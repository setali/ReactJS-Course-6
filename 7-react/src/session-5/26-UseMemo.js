import { useEffect, useState, useMemo } from 'react'

const data = [
  { id: 1, title: 'Yek', parentId: null },
  { id: 2, title: 'Do', parentId: 1 },
  { id: 3, title: 'Se', parentId: 1 },
  { id: 4, title: 'Chahar', parentId: 2 },
  { id: 5, title: 'Panj', parentId: 2 },
  { id: 6, title: 'Shesh', parentId: 3 }
]

const lastData = [
  {
    id: 1,
    title: 'Yek',
    children: [
      {
        id: 2,
        title: 'Do',
        children: [
          { id: 4, title: 'Chahar' },
          { id: 5, title: 'Panj' }
        ]
      },
      { id: 3, title: 'Se', children: [{ id: 6, title: 'Shesh' }] }
    ]
  }
]

export default function Parent () {
  const [mount, setMount] = useState(true)

  return (
    <div>
      <button onClick={e => setMount(s => !s)}>
        {mount ? 'UnMount' : 'Mount'}
      </button>
      {mount && <Child />}
    </div>
  )
}

function Child () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setCount(s => s + 1), 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  function heavyProcess () {
    return (999999999999999999999999999n ** 9999n).toString()
  }

  const value = useMemo(() => {
    console.log('MEMO')
    return heavyProcess()
  }, [])

  return (
    <div>
      Count: {count}
      <hr />
      Value: {value}
    </div>
  )
}
