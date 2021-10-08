import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Post from '../Post'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

test('Post fetching test', async () => {
  const fakePost = {
    userId: 1,
    id: 1,
    title: 'Post title',
    body: 'Post body'
  }

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakePost)
    })
  )

  await act(async () => {
    render(<Post />, container)
  })

  expect(container.querySelector('h1').textContent).toBe('Post Item')
  expect(container.querySelector('p').textContent).toBe(fakePost.title)
})
