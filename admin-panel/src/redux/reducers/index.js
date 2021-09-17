import { combineReducers } from 'redux'
import { persons } from './person'
import { posts, post, postsIsLoading } from './post'

const reducer = combineReducers({
  persons,
  posts,
  post,
  postsIsLoading
})

export default reducer
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
