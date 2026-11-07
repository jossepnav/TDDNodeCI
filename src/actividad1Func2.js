// src/actividad1Func2.js
export function esPinValido(pin) {
  // 1. Filtra null/undefined/vacíos y valida que sean solo 4 o 6 dígitos numéricos
  if (!pin || !/^(?:\d{4}|\d{6})$/.test(pin)) {
    return false
  }

  // 2. Si al eliminar duplicados con Set la longitud es 1, todos los dígitos son iguales
  if (new Set(pin).size === 1) {
    return false
  }

  return true
}
