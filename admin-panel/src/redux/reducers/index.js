import { combineReducers } from 'redux'
import { persons } from './person'
import { posts } from './post'

export default combineReducers({
  persons,
  posts
})

// export default function reducer (state = {}, action) {
//   console.log(action)

//   switch (action.type) {
//     case 'PERSONS':
//       return { ...state, persons: action.payload }

//     case 'POSTS':
//       return { ...state, posts: action.payload }

//     default:
//       return state
//   }
// }
