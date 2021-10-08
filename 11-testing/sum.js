function sum (a, b) {
  return +a + +b
}

function sumString (a, b) {
  return `Sum is ${sum(a, b)}`
}

module.exports = {
  sum,
  sumString
}
