import { createAction } from '@reduxjs/toolkit'
import request from 'tools/request'

export const setPosts = createAction('POSTS')
export const setPostsIsLoading = createAction('POSTS_IS_LOADING')
export const setPost = createAction('POST')

export function getPosts () {
  return function (dispatch, getState) {
    // if (getState().posts.length === 0)
    dispatch(setPostsIsLoading(true))
    request('/posts')
      .then(response => dispatch(setPosts(response.data)))
      .finally(() => dispatch(setPostsIsLoading(false)))
  }
}

export const getPost = id => dispatch =>
  request(`/posts/${id}`).then(response => dispatch(setPost(response.data)))

// export function setPosts (payload) {
//   return {
//     type: 'POSTS',
//     payload
//   }
// }

// export function setPostsIsLoading (payload) {
//   return {
//     type: 'POSTS_IS_LOADING',
//     payload
//   }
// }

// export function setPost (payload) {
//   return {
//     type: 'POST',
//     payload
//   }
// }
