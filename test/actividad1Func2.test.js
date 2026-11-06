// test/actividad1Func2.test.js
import { describe, it, expect } from 'vitest'
import { esPinValido } from '../src/actividad1Func2.js'

describe('PF03. Actividad 1 - TDD + Node + CI Funcion 2', () => {
  it('debe devolver false si el pin es null, undefined o vacío', () => {
    expect(esPinValido(null)).toBe(false)       // No puede ser null
    expect(esPinValido(undefined)).toBe(false)  // No puede ser undefined
    expect(esPinValido('')).toBe(false)         // No puede estar vacío
  })

  it('debe devolver false si la longitud no es exactamente 4 o 6', () => {
    expect(esPinValido('1')).toBe(false)        // Longitud 1 es inválida
    expect(esPinValido('123')).toBe(false)      // Longitud 3 es inválida
    expect(esPinValido('12345')).toBe(false)    // Longitud 5 es inválida
    expect(esPinValido('1234567')).toBe(false)  // Longitud 7 es inválida
  })

  it('debe devolver false si contiene caracteres que no sean dígitos del 0 al 9', () => {
    expect(esPinValido('12a4')).toBe(false)     // Contiene una letra en longitud 4
    expect(esPinValido('12345b')).toBe(false)   // Contiene una letra en longitud 6
    expect(esPinValido('12.4')).toBe(false)     // Contiene un punto decimal
    expect(esPinValido('-123')).toBe(false)     // Contiene un signo menos
  })

  it('debe devolver false si todos los dígitos son iguales', () => {
    expect(esPinValido('1111')).toBe(false)     // Todos los dígitos iguales (4 caracteres)
    expect(esPinValido('888888')).toBe(false)   // Todos los dígitos iguales (6 caracteres)
    expect(esPinValido('0000')).toBe(false)     // Todos ceros (4 caracteres)
  })

  it('debe devolver true si el PIN cumple con todas las reglas', () => {
    expect(esPinValido('1234')).toBe(true)      // PIN de 4 dígitos válido
    expect(esPinValido('098765')).toBe(true)    // PIN de 6 dígitos válido con cero al inicio
    expect(esPinValido('1121')).toBe(true)      // PIN válido con dígitos repetidos pero no todos iguales
    expect(esPinValido('432198')).toBe(true)    // PIN de 6 dígitos válido mixto
  })
})
