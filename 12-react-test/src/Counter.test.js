import { render } from '@testing-library/react'
import ReactDOM from 'react-dom'
import Counter from './Counter'

describe('Counter', () => {
  test('Counter test pure', () => {
    const root = document.createElement('div')
    ReactDOM.render(<Counter />, root)

    const h3 = root.querySelector('h3').textContent
    expect(h3).toBe('My Counter')

    const button = root.querySelector('button').textContent
    expect(button).toBe('Increment')
  })

  test('Counter testing with testing library', () => {
    const { getByText, getByTestId } = render(<Counter />)
    getByText(/my counter/i)
    getByText('Increment')
    expect(getByTestId('counter-value').textContent).toBe('0')
  })

  test('Counter click testing', () => {
    const { getByText, getByTestId } = render(<Counter />)

    const button = getByText('Increment')

    const counterElement = getByTestId('counter-value')

    expect(counterElement.textContent).toBe('0')

    button.click()
    button.click()
    button.click()
    button.click()

    expect(counterElement.textContent).toBe('4')

    button.click()
    button.click()

    expect(counterElement.textContent).toBe('6')
  })
})
