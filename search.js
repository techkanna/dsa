export function linearSearch(arr, target){ // Big-O = O(n)
  for(let i = 0; i<arr.length; i++){
    if(target == arr[i])return i
  }

  return -1
}

// const arr = [-5,2,10,4,6]
// console.log(linearSearch(arr, 10) == 2)
// console.log(linearSearch(arr, 6) == 4)
// console.log(linearSearch(arr, 20) == -1)


export function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  const mid = Math.floor((start + end) / 2);

  if (val === arr[mid]) {
    return mid;
  }

  if (start >= end) {
    return -1;
  }

  return val < arr[mid]
    ? binarySearch(arr, val, start, mid - 1)
    : binarySearch(arr, val, mid + 1, end);
}

// const arr = [-5,2,4,6,10]
// console.log(binarySearch(arr, 10) == 4)
// console.log(binarySearch(arr, 6) == 3)
// console.log(binarySearch(arr, 20) == -1)

export function binarySearchWhile(arr, val) {
  let start = 0; 
  let end = arr.length - 1;

  while(start <= end){
    const mid = Math.floor((start + end) / 2);

    if (val === arr[mid]) {
      return mid;
    }

    if(val < arr[mid]){
      end=mid-1
    }else{
      start = mid+1
    }
  }

  return -1;
}

// const arr = [4,46,63,73,77,100,523,4352]

// console.log(binarySearchWhile(arr, 73) === 3);
// console.log(binarySearchWhile(arr, 100) === 5);
// console.log(binarySearchWhile(arr, 1000) === -1);
// console.log(binarySearchWhile(arr, 4) === 0);
