function recurciveFibanaci(n) { // Big-O = O(2^n)
 if(n<2)return n
 
 return recurciveFibanaci(n-1)+ recurciveFibanaci(n-2)
}


// console.log(recurciveFibanaci(5))


function recursiveFactorial(n){ // Big-O = O(n)
  if(n===0)return 1
  return n * recursiveFactorial(n-1)
}

// console.log(recursiveFactorial(1));

function linearSearch(arr, target){ // Big-O = O(n)
  for(let i = 0; i<arr.length; i++){
    if(target == arr[i])return i
  }

  return -1
}

// const arr = [-5,2,10,4,6]
// console.log(linearSearch(arr, 10) == 2)
// console.log(linearSearch(arr, 6) == 4)
// console.log(linearSearch(arr, 20) == -1)


function binarySearch(arr, target){ // Big-O = ?
  if(arr.length === 0) return -1

  const centerIndex = Math.ceil(arr.length / 2)
  const centerElement = arr[centerIndex]
  if(centerElement == target) return centerIndex

  let newArr=[];
  if(target > centerElement){
    newArr = arr.slice(centerIndex)
  }else{
    newArr = arr.slice(0,centerIndex)
  }
  
  return binarySearch(newArr, target)
}

// const arr = [-5,2,4,6,10]
// console.log(binarySearch(arr, 10) == 4)
// console.log(binarySearch(arr, 6) == 3)
// console.log(binarySearch(arr, 20) == -1)
