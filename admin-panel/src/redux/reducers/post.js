import { createReducer } from '@reduxjs/toolkit'
import { setPosts, setPost, setPostsIsLoading } from 'actions/post'

export const posts = createReducer([], {
  [setPosts]: (state, { payload }) => payload
})

export const post = createReducer(
  {},
  {
    [setPost]: (state, { payload }) => payload
  }
)

export const postsIsLoading = createReducer(true, {
  [setPostsIsLoading]: (state, { payload }) => payload
})

// export function posts (state = [], action) {
//   switch (action.type) {
//     case 'POSTS':
//       // action.payload.length = 5
//       return action.payload

//     default:
//       return state
//   }
// }

// export function post (state = {}, action) {
//   switch (action.type) {
//     case 'POST':
//       return action.payload

//     default:
//       return state
//   }
// }

// export function postsIsLoading (state = true, action) {
//   switch (action.type) {
//     case 'POSTS_IS_LOADING':
//       return action.payload

//     default:
//       return state
//   }
// }
