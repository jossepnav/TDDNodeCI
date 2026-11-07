// test/actividad1.test.js
import { describe, it, expect } from 'vitest'
import { fibonacci } from '../src/actividad1.js'

describe('PF03. Actividad 1 - TDD + Node + CI', () => {
  it('debe lanzar un RangeError con el texto correcto si n < 0', () => {
    expect(() => fibonacci(-1)).toThrow(RangeError)		//Solo números enteros mayores que 0
    expect(() => fibonacci(-10)).toThrow(RangeError)	//Solo números enteros mayores que 0
  })

  it('debe devolver 0 si n = 0', () => {
    expect(fibonacci(0)).toBe(0)	//Si n = 0, devuelve 0
  })

  it('debe devolver 1 si n = 1', () => {
    expect(fibonacci(1)).toBe(1)	//Si n = 1, devuelve 1
  })

  it('debe calcular correctamente los términos de la secuencia para n >= 2', () => {
	expect(fibonacci(2)).toBe(1)  		// f(2) = f(1) + f(0) = 1 + 0 = 1
	expect(fibonacci(3)).toBe(2)  		// f(3) = 1 + 1 = 2
	expect(fibonacci(4)).toBe(3)  		// f(4) = 2 + 1 = 3
	expect(fibonacci(5)).toBe(5)  		// f(5) = 3 + 2 = 5
	expect(fibonacci(10)).toBe(55)		// f(10) = 21 + 34 = 55
	expect(fibonacci(20)).toBe(6765)	// f(20) = 4181 + 2584 = 6785
  })
})