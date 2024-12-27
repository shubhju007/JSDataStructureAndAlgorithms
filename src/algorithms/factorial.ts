export default function factorial(n: number): number {
  let output = 1;
  if (n <= 1) return 1;
  for (let i = 1; i <= n; i++) {
    output = output * i;
  }
  return output;
}

console.log("n = 4", factorial(4));
console.log("n = 6", factorial(6));
console.log("n = 8", factorial(8));

// Big O = O(n)
