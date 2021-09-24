// import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
import reducer from '../reducers'

// const myMiddleware = ({ dispatch, getState }) => next => action =>
//   typeof action === 'function' ? action(dispatch, getState) : next(action)

// const myMiddleware = function (store) {
//   return function (next) {
//     return function (action) {
//       console.log('store => ', store)
//       console.log('next => ', next)
//       console.log('action => ', action)
//       if (typeof action === 'function') {
//         action(store.dispatch)
//       } else {
//         next(action)
//       }
//     }
//   }
// }

const mi1 = ({ dispatch, getState }) => next => action => next(action)
const mi2 = ({ dispatch, getState }) => next => action => next(action)

// const store = createStore(reducer, applyMiddleware(myMiddleware))
// const store = createStore(reducer, applyMiddleware(thunk))
const store = configureStore({ reducer, middleware: [mi1, mi2] })

export default store
