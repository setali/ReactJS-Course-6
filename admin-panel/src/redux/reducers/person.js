export function persons (state = [], action) {
  switch (action.type) {
    case 'PERSONS':
      return action.payload

    default:
      return state
  }
}
