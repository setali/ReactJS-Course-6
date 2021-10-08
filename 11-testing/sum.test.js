const { sum, sumString: mySumString } = require('./sum')

const sumString = jest.fn(mySumString)

beforeAll(() => {
  console.log('Before execute all tests')
})

beforeEach(() => {
  console.log('Before execute every tests')
})

afterEach(() => {
  console.log('After execute every tests')
})

afterAll(() => {
  console.log('After execute all tests')
})

describe('Sum tests', () => {
  test('Testing test', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(5, 2)).toBe(7)
    expect(sum('10', 2)).toBe(12)
    expect(sum(5, NaN)).toBeNaN()
    expect(sum(5, 'Salam')).toBeNaN()
  })

  test('Testing sum string', () => {
    expect(sumString(1, 2)).toBe('Sum is 3')
    expect(sumString('Salam', 2)).toBe('Sum is NaN')
    expect(sumString('10', 2)).toBe('Sum is 12')
    expect(sumString).toBeCalledTimes(3)
    expect(sumString).toBeCalledWith(1, 2)
    expect(sumString).toBeCalledWith('Salam', 2)
    expect(sumString).toBeCalledWith('10', 2)
  })
})

// describe('My tests', () => {
//   test('Testing 1', () => {
//     expect(false).toBeFalsy()
//     expect(10).toBeTruthy()
//   })

//   test('Testing 2', () => {
//     expect(1 + 2).toBe(3)
//     expect(1 + NaN).toBeNaN()
//   })
// })

// if (sum(1, 2) !== 3) {
//   throw 'Test fail'
// }

// if (sum('10', 2) !== 12) {
//   throw 'Test fail'
// }

// if (!Number.isNaN(sum(NaN, 2))) {
//   throw 'Test fail'
// }
