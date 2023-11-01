export function recursiveFactorial(n){ // Big-O = O(n)
  if(n===0)return 1
  return n * recursiveFactorial(n-1)
}

// console.log(recursiveFactorial(1));