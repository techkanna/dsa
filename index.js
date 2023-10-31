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


// Heap [ min heap - min value will be the first element ]
class Heap{
  constructor(){
    this.heap = []
  }

  getLeftChildIndex(parentIndex){
    return (2 * parentIndex) + 1
  }

  getRightChildIndex(parentIndex){
    return (2 * parentIndex) + 2
  }

  getParentIndex(childIndex){
    return Math.floor((childIndex - 1) / 2)
  }

  hasLeftChild(parentIndex){
    return this.getLeftChildIndex(parentIndex) < this.heap.length;
  }

  hasRightChild(parentIndex){
    return this.getRightChildIndex(parentIndex) < this.heap.length;
  }

  hasParent(childIndex){
    return this.getParentIndex(childIndex) >= 0;
  }

  leftChild(parentIndex){
    return this.heap[this.getLeftChildIndex(parentIndex)]
  }

  rightChild(parentIndex){
    return this.heap[this.getRightChildIndex(parentIndex)]
  }

  parent(childIndex){
    return this.heap[this.getParentIndex(childIndex)]
  }

  swap(indexOne, indexTwo){
    const temp = this.heap[indexOne]
    this.heap[indexOne] = this.heap[indexTwo]
    this.heap[indexTwo] = temp
  }

  peek(){
    if(this.heap.length === 0) return null

    return this.heap[0]
  }

  printHeap(){
    return this.heap
  }

  add(item){
    this.heap.push(item)
    this.heapifyUp()
  }

  remove(){
    if(this.heap.length === 0)return null

    const item = this.heap[0]
    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap.pop()
    this.heapifiyDown()

    return item
  }

  heapifyUp(){
    let index = this.heap.length - 1
    while(this.hasParent(index) && this.heap[index] < this.parent(index)){
      this.swap(this.getParentIndex(index), index)
      index = this.getParentIndex(index)
    }
  }

  heapifiyDown(){
    let index = 0
    while(this.hasLeftChild(index)){
      let smallerIndex = this.getLeftChildIndex(index)
      if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)){
        smallerIndex = this.getRightChildIndex(index)
      }

      if(this.heap[index] < this.heap[smallerIndex]){
        break
      }else{
        this.swap(index, smallerIndex)
      }
      index = smallerIndex
    }
  }

}

// Creating the Heap
var heap = new Heap();
 
// Adding The Elements
heap.add(10);
heap.add(15);
heap.add(1593);
heap.add(30);
heap.add(0);
heap.add(40);
heap.add(50);
heap.add(9);
heap.add(100);
heap.add(3040);
heap.add(40);
 
// Printing the Heap
console.log(heap.printHeap());

// Peeking And Removing Top Element
console.log('====================================');
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log('====================================');

console.log(heap.printHeap());