/**
 * Generates the equation of a normal distribution.
 * @param my - The mean (μ) of the distribution.
 * @param sigma - The standard deviation (σ) of the distribution.
 * @returns The equation as a string compatible with mathjs.
 */
export default function normalDistributionEquation(
  my: number,
  sigma: number,
): string {
  return `(1 / (${sigma} * sqrt(2 * pi))) * exp(-0.5 * ((x - ${my}) / ${sigma})^2)`;
}
