import { describe, it, expect } from '@jest/globals'
import MyMath from './MyMath.js'

describe('MyMath', () => {
  it('should sum all numbers', () => {
    const numbers = [0, 1, 1, 2, 3, 5, 8]

    const result = MyMath.sum(...numbers)

    expect(result).toEqual(20)
  })

  it('should multiply all numbers', () => {
    const numbers = [0, 1, 1, 2, 3, 5, 8]

    const result = MyMath.multiply(...numbers)

    expect(result).toEqual(0)
  })
})
