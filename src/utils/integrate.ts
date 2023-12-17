import { parse, compile } from "mathjs";

/**
 * Calculates the definite integral of a function (given as a string) using the Trapezoidal Rule.
 * @param funcExpr - The function expression as a string.
 * @param lower - The lower limit of integration.
 * @param upper - The upper limit of integration.
 * @param trapezoids - The number of trapezoids (the higher, the more accurate).
 * @returns The approximate value of the integral.
 */
export default function integrate(
  funcExpr: string,
  lower: number,
  upper: number,
  trapezoids: number = 1000,
): number {
  const func = compile(funcExpr);
  let sum = 0.0;
  const delta = (upper - lower) / trapezoids;

  for (let i = 0; i < trapezoids; i++) {
    const x0 = lower + i * delta;
    const x1 = x0 + delta;
    sum += 0.5 * (func.evaluate({ x: x0 }) + func.evaluate({ x: x1 })) * delta;
  }

  return sum;
}
