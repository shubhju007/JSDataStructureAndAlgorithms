export default function fibonacciRecursive(
  n: number,
  series: number[] = [0, 1]
): number[] {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return series.slice(0, 2); // Base case for first two numbers

  if (series.length < n) {
    series.push(series[series.length - 1] + series[series.length - 2]);
    return fibonacciRecursive(n, series); // Recursive call
  }

  return series;
}

console.log("n = 4", fibonacciRecursive(4));
console.log("n = 6", fibonacciRecursive(6));
console.log("n = 8", fibonacciRecursive(8));

// Big O = O(n)
