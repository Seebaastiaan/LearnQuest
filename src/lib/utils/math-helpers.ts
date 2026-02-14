// Math utility functions for MCM, MCD, fractions, etc.

/**
 * Greatest Common Divisor (Máximo Común Divisor)
 */
export function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

/**
 * Least Common Multiple (Mínimo Común Múltiplo)
 */
export function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

/**
 * GCD of multiple numbers
 */
export function gcdMultiple(...nums: number[]): number {
  return nums.reduce((a, b) => gcd(a, b));
}

/**
 * LCM of multiple numbers
 */
export function lcmMultiple(...nums: number[]): number {
  return nums.reduce((a, b) => lcm(a, b));
}

/**
 * Prime factorization
 * Returns an array of [prime, exponent] pairs
 */
export function primeFactorization(n: number): [number, number][] {
  n = Math.abs(n);
  if (n <= 1) return [];

  const factors: [number, number][] = [];
  let divisor = 2;

  while (divisor * divisor <= n) {
    let count = 0;
    while (n % divisor === 0) {
      count++;
      n /= divisor;
    }
    if (count > 0) {
      factors.push([divisor, count]);
    }
    divisor++;
  }
  if (n > 1) {
    factors.push([n, 1]);
  }

  return factors;
}

/**
 * Format prime factorization as LaTeX string
 */
export function factorizationToLatex(factors: [number, number][]): string {
  return factors
    .map(([prime, exp]) => (exp === 1 ? `${prime}` : `${prime}^{${exp}}`))
    .join(" \\times ");
}

/**
 * Simplify a fraction
 */
export function simplifyFraction(
  numerator: number,
  denominator: number,
): [number, number] {
  const d = gcd(Math.abs(numerator), Math.abs(denominator));
  const sign = denominator < 0 ? -1 : 1;
  return [(numerator * sign) / d, (denominator * sign) / d];
}

/**
 * Add two fractions, returns [numerator, denominator]
 */
export function addFractions(
  n1: number,
  d1: number,
  n2: number,
  d2: number,
): [number, number] {
  const commonDenom = lcm(d1, d2);
  const newN1 = n1 * (commonDenom / d1);
  const newN2 = n2 * (commonDenom / d2);
  return simplifyFraction(newN1 + newN2, commonDenom);
}

/**
 * Subtract two fractions
 */
export function subtractFractions(
  n1: number,
  d1: number,
  n2: number,
  d2: number,
): [number, number] {
  return addFractions(n1, d1, -n2, d2);
}

/**
 * Multiply two fractions
 */
export function multiplyFractions(
  n1: number,
  d1: number,
  n2: number,
  d2: number,
): [number, number] {
  return simplifyFraction(n1 * n2, d1 * d2);
}

/**
 * Divide two fractions
 */
export function divideFractions(
  n1: number,
  d1: number,
  n2: number,
  d2: number,
): [number, number] {
  return simplifyFraction(n1 * d2, d1 * n2);
}

/**
 * Convert mixed number to improper fraction
 */
export function mixedToImproper(
  whole: number,
  numerator: number,
  denominator: number,
): [number, number] {
  const sign = whole < 0 ? -1 : 1;
  return [sign * (Math.abs(whole) * denominator + numerator), denominator];
}

/**
 * Convert improper fraction to mixed number
 */
export function improperToMixed(
  numerator: number,
  denominator: number,
): [number, number, number] {
  const whole = Math.floor(Math.abs(numerator) / denominator);
  const remainder = Math.abs(numerator) % denominator;
  const sign = numerator < 0 ? -1 : 1;
  return [sign * whole, remainder, denominator];
}

/**
 * Convert fraction to decimal
 */
export function fractionToDecimal(
  numerator: number,
  denominator: number,
): number {
  return numerator / denominator;
}

/**
 * Calculate percentage of a value
 */
export function percentageOf(percentage: number, value: number): number {
  return (percentage / 100) * value;
}

/**
 * Find what percentage a is of b
 */
export function whatPercentage(part: number, whole: number): number {
  return (part / whole) * 100;
}

/**
 * Random integer between min and max (inclusive)
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random prime number up to max
 */
export function randomPrime(max: number = 20): number {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19].filter((p) => p <= max);
  return primes[Math.floor(Math.random() * primes.length)];
}
