import { useState, useReducer } from 'react'

function getId (todos) {
  return todos.length ? todos[todos.length - 1].id + 1 : 1
}

function reducer (state, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return [...state, { title: payload, id: getId(state) }]

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== payload)

    default:
      return state
  }
}

export default function TodosUseReducer () {
  const [todos, dispatch] = useReducer(reducer, [])
  const [task, setTask] = useState('')

  function addTodo () {
    if (!task) return
    dispatch({ type: 'ADD_TODO', payload: task })
    setTask('')
  }

  function removeTodo (id) {
    dispatch({ type: 'REMOVE_TODO', payload: id })
  }

  return (
    <div>
      <ol>
        {todos.map(({ id, title }, index) => (
          <li key={id}>
            {title} - {id} - {index}
            <span
              onClick={() => removeTodo(id)}
              style={{ color: 'red', margin: '10px', cursor: 'pointer' }}
            >
              x
            </span>
          </li>
        ))}
      </ol>
      <input type='text' value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}
