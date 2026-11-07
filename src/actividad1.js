// src/actividad1.js
export function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("Solo números enteros mayores o iguales a 0");
  }

  if (n <= 1) return n;

  let prev2 = 0;
  let prev1 = 1;

  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}
