export default function factorialRecursive(n: number): number {
  let output = 1;
  if (n <= 1) return 1;
  for (let i = 1; i <= n; i++) {
    output = n * factorialRecursive(n - 1);
  }
  return output;
}

console.log("n = 4", factorialRecursive(4));
console.log("n = 6", factorialRecursive(6));
console.log("n = 8", factorialRecursive(8));

// Big O = O(n)
