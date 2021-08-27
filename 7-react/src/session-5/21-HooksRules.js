import { useState, useEffect } from 'react'

export default function HooksRules () {
  const [count, setCount] = useState(0)
  // ==> Array // length === 2

  // if (count % 2) {
  //   const [ali, setAli] = useState('ali')
  // }

  // function func () {
  //   const [state, setState] = useState(10)
  // }

  // for (let index = 0; index < 5; index++) {
  //   const [state, setState] = useState(10)
  // }

  const [state, setState] = useState(10)

  useEffect(() => {
    console.log('salam')
    const [state, setState] = useState(10)
  }, [])

  return <div>{count}</div>
}
