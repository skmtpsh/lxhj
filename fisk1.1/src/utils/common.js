export function add (num1, num2) {
  let n1len, n2len, npow
  try {
    n1len = num1.toString().split('.')[1].length
  } catch (f) {
    n1len = 0
  }
  try {
    n2len = num2.toString().split('.')[1].length
  } catch (f) {
    n2len = 0
  }
  npow = Math.pow(10, Math.max(n1len, n2len))
  return (num1 * npow + num2 * npow) / npow
}
