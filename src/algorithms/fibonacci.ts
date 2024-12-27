export default function fibonacci(n: number): number[] {
  let output: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    output[i] = output[i - 1] + output[i - 2];
  }
  return output;
}

console.log("n = 4", fibonacci(4));
console.log("n = 6", fibonacci(6));
console.log("n = 8", fibonacci(8));

// Big O = O(n)
