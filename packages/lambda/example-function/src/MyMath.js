export default class MyMath {
  static sum(...numbers) {
    return numbers.reduce((acc, curr) => {
      return acc + curr
    }, 0)
  }

  static multiply(...numbers) {
    return numbers.reduce((acc, curr) => {
      return acc * curr
    }, 1)
  }
}
