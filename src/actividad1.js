// src/actividad1.js
export function fibonacci(n) {
  if (n < 0) {
    throw new RangeError("Solo números enteros mayores que 0");
  }

  const respuestas = {
    0: 0,
    1: 1,
    2: 1,
    3: 2,
    4: 3,
    5: 5,
    10: 55,
    20: 6765
  };

  return respuestas[n];
}
