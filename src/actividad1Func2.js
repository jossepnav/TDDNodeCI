// src/actividad1Func2.js
export function esPinValido(pin) {
  // 1. No puede ser null, undefined ni estar vacío
  if (pin === null || pin === undefined || pin === '') {
    return false
  }

  // 2. Longitud exacta de 4 o 6 caracteres
  if (pin.length !== 4 && pin.length !== 6) {
    return false
  }

  // 3. Solo dígitos del 0 al 9
  const soloDigitos = /^[0-9]+$/
  if (!soloDigitos.test(pin)) {
    return false
  }

  // 4. Prohibir que todos los dígitos sean iguales
  // Comparamos contra el primer elemento pin[0]
  if (pin.split('').every(char => char === pin[0])) {
    return false
  }

  return true
}
