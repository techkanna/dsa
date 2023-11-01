export function recurciveFibanaci(n) { // Big-O = O(2^n)
  if(n<2)return n
  
  return recurciveFibanaci(n-1)+ recurciveFibanaci(n-2)
 }
 
 
 // console.log(recurciveFibanaci(5))